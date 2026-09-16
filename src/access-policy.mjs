const actions = {
  INFANTE: new Set(['ASSIGN_TASK', 'VIEW_AGGREGATES', 'APPROVE_EXCEPTION', 'ESCALATE']),
  CEO: new Set(['MANAGE_CONTRACT', 'MANAGE_BUDGET', 'ASSIGN_SHIFT', 'VIEW_DIVISION']),
  SUPERVISOR: new Set(['VALIDATE_SERVICE', 'ESCALATE_INCIDENT', 'REQUEST_COVERAGE']),
  HR: new Set(['MANAGE_EMPLOYEE', 'ASSIGN_TRAINING', 'VIEW_PEOPLE']),
  WORKER: new Set(['CLOCK_IN', 'COMPLETE_CHECKLIST', 'REPORT_INCIDENT', 'VIEW_OWN_TASK'])
  ,SPECIALIST: new Set(['VALIDATE_SERVICE', 'REGISTER_INCIDENT', 'ASSIGN_TRAINING', 'PREPARE_CLIENT_REPORT'])
};

export function can(actor, action, resource = {}) {
  if (!actor?.agentId || !actor?.role || !resource?.divisionId) return 'DENY';
  if (actor.role === 'DIRECTOR' && actions.INFANTE.has(action)) return 'ALLOW';
  if (actor.role === 'CEO' && resource.divisionId === actor.divisionId && actions.CEO.has(action)) return action === 'MANAGE_BUDGET' ? 'ESCALATE' : 'ALLOW';
  if (actor.role === 'SUPERVISOR' && resource.divisionId === actor.divisionId && actions.SUPERVISOR.has(action)) return 'ALLOW';
  if (actor.role === 'HR' && resource.divisionId === 'JANITORIAL' && actions.HR.has(action)) return 'ALLOW';
  if (actor.role === 'WORKER' && resource.divisionId === actor.divisionId && resource.employeeId === actor.employeeId && actions.WORKER.has(action)) return 'ALLOW';
  if (actor.role === 'SPECIALIST' && resource.divisionId === actor.divisionId && actions.SPECIALIST.has(action)) return 'ALLOW';
  return 'DENY';
}
