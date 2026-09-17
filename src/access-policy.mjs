const actions = {
  INFANTE: new Set(['ASSIGN_TASK', 'VIEW_AGGREGATES', 'VIEW_AUDIT', 'APPROVE_EXCEPTION', 'ESCALATE', 'APPROVE_INTERDIVISIONAL_BUDGET']),
  CEO: new Set(['MANAGE_CONTRACT', 'MANAGE_BUDGET', 'ASSIGN_SHIFT', 'VIEW_AUDIT', 'VIEW_DIVISION']),
  CONTROLLER: new Set(['VIEW_FINANCIALS', 'VALIDATE_OVERTIME', 'AUDIT_PAYROLL', 'APPROVE_EXTRAORDINARY_COST']),
  ACCOUNT_MANAGER: new Set(['VIEW_CLIENT_HEALTH', 'VIEW_SLA_METRICS', 'REQUEST_REINFORCEMENT', 'ESCALATE_CLIENT_COMPLAINT']),
  SUPERVISOR: new Set(['VALIDATE_SERVICE', 'ESCALATE_INCIDENT', 'REQUEST_COVERAGE']),
  HR: new Set(['MANAGE_EMPLOYEE', 'ASSIGN_TRAINING', 'VIEW_PEOPLE']),
  WORKER: new Set(['CLOCK_IN', 'COMPLETE_CHECKLIST', 'REPORT_INCIDENT', 'VIEW_OWN_TASK']),
  SPECIALIST: new Set(['VALIDATE_SERVICE', 'REGISTER_INCIDENT', 'ASSIGN_TRAINING', 'PREPARE_CLIENT_REPORT'])
};

export function can(actor, action, resource = {}) {
  if (!actor?.agentId || !actor?.role || !resource?.divisionId) return 'DENY';
  if ((actor.role === 'DIRECTOR' || actor.role === 'VP') && actions.INFANTE.has(action)) return 'ALLOW';
  if (actor.role === 'CONTROLLER' && actions.CONTROLLER.has(action)) return action === 'APPROVE_EXTRAORDINARY_COST' ? 'ESCALATE' : 'ALLOW';
  if (actor.role === 'ACCOUNT_MANAGER' && resource.divisionId === actor.divisionId && actions.ACCOUNT_MANAGER.has(action)) return 'ALLOW';
  if (actor.role === 'CEO' && resource.divisionId === actor.divisionId && actions.CEO.has(action)) return action === 'MANAGE_BUDGET' ? 'ESCALATE' : 'ALLOW';
  if (actor.role === 'SUPERVISOR' && resource.divisionId === actor.divisionId && actions.SUPERVISOR.has(action)) return 'ALLOW';
  if (actor.role === 'HR' && resource.divisionId === 'JANITORIAL' && actions.HR.has(action)) return 'ALLOW';
  if (actor.role === 'WORKER' && resource.divisionId === actor.divisionId && resource.employeeId === actor.employeeId && actions.WORKER.has(action)) return 'ALLOW';
  if (actor.role === 'SPECIALIST' && resource.divisionId === actor.divisionId && actions.SPECIALIST.has(action)) return 'ALLOW';
  return 'DENY';
}
