import { prepareGovernedAction } from './governed-action.mjs';
import { resolveRequestContext } from './request-context.mjs';
import { authorizeRequest } from './request-authorization.mjs';
import { evaluateApproval } from './approval-gate.mjs';

export function createProductionApiHandler({ state = {}, repository, audit = [], idempotency = new Set(), approvals = new Map() } = {}) {
  let nextApprovalId = approvals.size + 1;
  const recordRead = (resolved, action) => { const now = new Date().toISOString(); const event = { auditEventId: `AUD-${audit.length + 1}`, tenantId: resolved.tenantId, actorId: resolved.actorId, divisionId: resolved.divisionId, action, status: 'READ', requestId: resolved.requestId, traceId: resolved.traceId, createdAt: now, updatedAt: now }; audit.push(event); return event.auditEventId; };
  return async function handle({ method = 'GET', path, context, action, resource, intent, decision, idempotencyKey } = {}) {
    const resolved = resolveRequestContext(context);
    if (method === 'GET' && path === '/v1/me') return { status: 200, body: { context: resolved, auditEventId: recordRead(resolved, 'READ_ME') } };
    if (method === 'GET' && path === `/v1/divisions/${resolved.divisionId}/dashboard`) {
      const scoped = repository ? await repository.list(resolved) : [...(state.employees || []), ...(state.sites || [])].filter(record => record.tenantId === resolved.tenantId && record.divisionId === resolved.divisionId);
      const employees = repository ? (await repository.list(resolved, record => record.kind === 'employee')).length : scoped.filter(record => record.kind === 'employee').length;
      const sites = repository ? (await repository.list(resolved, record => record.kind === 'site')).length : scoped.filter(record => record.kind === 'site').length;
      return { status: 200, body: { divisionId: resolved.divisionId, employees, sites, synthetic: true, auditEventId: recordRead(resolved, 'READ_DIVISION_DASHBOARD') } };
    }
    if (method === 'GET' && path === '/v1/audit-events') {
      const authorization = authorizeRequest({ context: resolved, action: 'VIEW_AUDIT', resource: { tenantId: resolved.tenantId, divisionId: resolved.divisionId } });
      if (authorization.decision === 'DENY') return { status: 403, body: { error: 'FORBIDDEN' } };
      const events = audit.filter(event => event.tenantId === resolved.tenantId && event.divisionId === resolved.divisionId).map(event => ({ ...event }));
      return { status: 200, body: { events, auditEventId: recordRead(resolved, 'READ_AUDIT_EVENTS') } };
    }
    if (method === 'GET' && path === '/v1/approvals') {
      const authorization = authorizeRequest({ context: resolved, action: 'VIEW_AUDIT', resource: { tenantId: resolved.tenantId, divisionId: resolved.divisionId } });
      if (authorization.decision === 'DENY') return { status: 403, body: { error: 'FORBIDDEN' } };
      const pending = [...approvals.values()].filter(item => item.tenantId === resolved.tenantId && item.divisionId === resolved.divisionId).map(item => ({ ...item }));
      return { status: 200, body: { approvals: pending, auditEventId: recordRead(resolved, 'READ_PENDING_APPROVALS') } };
    }
    if (method === 'POST' && path?.startsWith('/v1/approvals/')) {
      const approvalId = path.split('/').at(-2);
      const pending = approvals.get(approvalId);
      if (!pending) return { status: 404, body: { error: 'APPROVAL_NOT_FOUND' } };
      if (pending.tenantId !== resolved.tenantId || pending.divisionId !== resolved.divisionId) return { status: 403, body: { error: 'FORBIDDEN' } };
      const approval = evaluateApproval({ intent: pending.intent, requiresHumanApproval: true }, decision);
      if (approval.status === 'WAITING_APPROVAL') return { status: 400, body: { error: 'APPROVAL_DECISION_REQUIRED' } };
      const status = approval.status === 'REJECTED' ? 'REJECTED' : 'READY';
      const now = new Date().toISOString();
      const event = { auditEventId: `AUD-${audit.length + 1}`, tenantId: resolved.tenantId, actorId: resolved.actorId, divisionId: resolved.divisionId, action: pending.action, status, approvalId, requestId: resolved.requestId, traceId: resolved.traceId, createdAt: now, updatedAt: now };
      audit.push(event);
      approvals.delete(approvalId);
      return { status: 200, body: { status, approval, approvalId, auditEventId: event.auditEventId, requestId: resolved.requestId, traceId: resolved.traceId } };
    }
    const supportedPost = path === '/v1/budget' || path === '/v1/attendance/events' || path === '/v1/incidents' || /^\/v1\/tasks\/[^/]+\/complete$/.test(path);
    if (method !== 'POST' || !supportedPost) return { status: 404, body: { error: 'NOT_FOUND' } };
    if (idempotencyKey && idempotency.has(idempotencyKey)) return { status: 409, body: { error: 'IDEMPOTENCY_KEY_REUSED' } };
    const result = prepareGovernedAction({ context: resolved, action, resource, intent, decision });
    const now = new Date().toISOString();
    const approvalId = result.status === 'PENDING_APPROVAL' ? `APR-${nextApprovalId++}` : undefined;
    const event = { auditEventId: `AUD-${audit.length + 1}`, tenantId: resolved.tenantId, actorId: resolved.actorId, divisionId: resolved.divisionId, action, status: result.status, ...(approvalId ? { approvalId } : {}), requestId: resolved.requestId, traceId: resolved.traceId, createdAt: now, updatedAt: now };
    audit.push(event);
    if (approvalId) approvals.set(approvalId, { approvalId, tenantId: resolved.tenantId, divisionId: resolved.divisionId, action, intent, resource });
    if (idempotencyKey) idempotency.add(idempotencyKey);
    return { status: result.status === 'DENIED' ? 403 : 200, body: { ...result, ...(approvalId ? { approvalId } : {}), auditEventId: event.auditEventId, requestId: resolved.requestId, traceId: resolved.traceId } };
  };
}
