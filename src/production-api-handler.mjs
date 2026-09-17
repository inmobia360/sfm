import { prepareGovernedAction } from './governed-action.mjs';
import { resolveRequestContext } from './request-context.mjs';

export function createProductionApiHandler({ state = {}, audit = [], idempotency = new Set() } = {}) {
  return function handle({ method = 'GET', path, context, action, resource, intent, decision, idempotencyKey } = {}) {
    const resolved = resolveRequestContext(context);
    if (method === 'GET' && path === '/v1/me') return { status: 200, body: { context: resolved } };
    if (method === 'GET' && path === `/v1/divisions/${resolved.divisionId}/dashboard`) {
      return { status: 200, body: { divisionId: resolved.divisionId, employees: state.employees?.length || 0, sites: state.sites?.length || 0, synthetic: true } };
    }
    if (method !== 'POST' || !path?.startsWith('/v1/')) return { status: 404, body: { error: 'NOT_FOUND' } };
    if (idempotencyKey && idempotency.has(idempotencyKey)) return { status: 409, body: { error: 'IDEMPOTENCY_KEY_REUSED' } };
    const result = prepareGovernedAction({ context: resolved, action, resource, intent, decision });
    const now = new Date().toISOString();
    const event = { auditEventId: `AUD-${audit.length + 1}`, tenantId: resolved.tenantId, actorId: resolved.actorId, divisionId: resolved.divisionId, action, status: result.status, requestId: resolved.requestId, traceId: resolved.traceId, createdAt: now, updatedAt: now };
    audit.push(event);
    if (idempotencyKey) idempotency.add(idempotencyKey);
    return { status: result.status === 'DENIED' ? 403 : 200, body: { ...result, auditEventId: event.auditEventId, requestId: resolved.requestId, traceId: resolved.traceId } };
  };
}
