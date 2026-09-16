import { routeEnvelope } from './agent-router.mjs';
import { transitionTask } from './task-state.mjs';

export function dispatch(message, context = {}) {
  const routing = routeEnvelope(message);
  if (routing.status !== 'ACCEPTED') return { ...routing, audit: audit(message, routing.status, routing.reason || 'ROUTING_GATE') };
  if (message.intent !== 'VALIDATE_CHECKLIST' || !context.task || !context.nextStatus) {
    return { ...routing, audit: audit(message, routing.status, 'HANDOFF_ACCEPTED') };
  }
  const result = transitionTask(context.task, context.nextStatus, context.actor || { agentId: message.to.agentId, role: 'SPECIALIST' });
  return result.ok ? { ...routing, status: 'COMPLETED', task: result.task, audit: { ...audit(message, 'COMPLETED', 'TASK_STATUS_CHANGED'), ...result.audit } } : { ...result, audit: audit(message, 'REJECTED', result.reason) };
}

function audit(message, status, reason) {
  return { event: 'AGENT_HANDOFF', messageId: message.messageId, correlationId: message.correlationId, actor: message.from.agentId, target: message.to.agentId, status, reason, at: new Date().toISOString() };
}
