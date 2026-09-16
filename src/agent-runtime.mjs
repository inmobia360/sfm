import { routeEnvelope } from './agent-router.mjs';
import { transitionTask } from './task-state.mjs';
import { can } from './access-policy.mjs';
import { evaluateApproval } from './approval-gate.mjs';

export function dispatch(message, context = {}) {
  const routing = routeEnvelope(message);
  const approval = evaluateApproval(message, context.approval);
  if (routing.status !== 'ACCEPTED' && !(routing.status === 'WAITING_APPROVAL' && approval.status === 'APPROVED')) return publish(context, message, { ...routing, audit: audit(message, routing.status, routing.reason || 'ROUTING_GATE') });
  if (approval.status === 'WAITING_APPROVAL' || approval.status === 'REJECTED') return publish(context, message, { ...approval, audit: audit(message, approval.status, 'APPROVAL_GATE') });
  const effectiveRouting = approval.status === 'APPROVED' ? { ...routing, status: 'ACCEPTED' } : routing;
  if (message.intent !== 'VALIDATE_CHECKLIST' || !context.task || !context.nextStatus) {
    return { ...effectiveRouting, audit: audit(message, effectiveRouting.status, 'HANDOFF_ACCEPTED') };
  }
  const actor = { agentId: message.to.agentId, role: 'SPECIALIST', divisionId: message.scope.divisionId, ...(context.actor || {}) };
  if (can(actor, 'VALIDATE_SERVICE', { divisionId: message.scope.divisionId }) !== 'ALLOW') return publish(context, message, { status: 'REJECTED', reason: 'ACTOR_NOT_AUTHORIZED', audit: audit(message, 'REJECTED', 'ACTOR_NOT_AUTHORIZED') });
  const result = transitionTask(context.task, context.nextStatus, actor);
  return publish(context, message, result.ok ? { ...routing, status: 'COMPLETED', task: result.task, audit: { ...audit(message, 'COMPLETED', 'TASK_STATUS_CHANGED'), ...result.audit } } : { ...result, audit: audit(message, 'REJECTED', result.reason) });
}

function publish(context, message, result) { context.bus?.publish('AGENT_HANDOFF', result.audit); return result; }

function audit(message, status, reason) {
  return { event: 'AGENT_HANDOFF', messageId: message.messageId, correlationId: message.correlationId, actor: message.from.agentId, target: message.to.agentId, status, reason, at: new Date().toISOString() };
}
