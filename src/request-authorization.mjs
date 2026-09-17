import { can } from './access-policy.mjs';
import { isResourceInContext, resolveRequestContext } from './request-context.mjs';

export function authorizeRequest({ context, action, resource }) {
  const resolved = resolveRequestContext(context);
  if (!isResourceInContext(resolved, resource)) return { decision: 'DENY', context: resolved };
  return { decision: can({ agentId: resolved.actorId, role: resolved.role, divisionId: resolved.divisionId, employeeId: resolved.employeeId }, action, resource), context: resolved };
}
