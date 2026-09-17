const REQUIRED = ['tenantId', 'actorId', 'role', 'divisionId', 'requestId', 'traceId'];
const ROLES = new Set(['DIRECTOR', 'CEO', 'SUPERVISOR', 'HR', 'QUALITY', 'PAYROLL', 'WORKER']);

export function resolveRequestContext(input = {}) {
  const missing = REQUIRED.filter(field => !input[field]);
  if (missing.length) throw new Error(`REQUEST_CONTEXT_INCOMPLETE:${missing.join(',')}`);
  if (!ROLES.has(input.role)) throw new Error('REQUEST_CONTEXT_ROLE_INVALID');
  if (!Array.isArray(input.siteIds)) throw new Error('REQUEST_CONTEXT_SITE_SCOPE_REQUIRED');
  if (input.role === 'WORKER' && input.employeeId !== input.actorId) throw new Error('REQUEST_CONTEXT_WORKER_SCOPE_INVALID');
  return { ...input, siteIds: [...new Set(input.siteIds)] };
}

export function isResourceInContext(context, resource = {}) {
  if (!context || resource.tenantId !== context.tenantId) return false;
  if (resource.divisionId !== context.divisionId) return false;
  if (resource.siteId && !context.siteIds.includes(resource.siteId)) return false;
  if (context.role === 'WORKER' && resource.employeeId !== context.employeeId) return false;
  return true;
}
