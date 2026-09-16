import { validateEnvelope } from './agent-envelope.mjs';

const routes = {
  CREATE_ONBOARDING_PLAN: 'JAN-ONBOARDING',
  ASSIGN_TRAINING: 'JAN-LEARNING',
  CREATE_SERVICE_TASK: 'JAN-OPERATIONS',
  VALIDATE_CHECKLIST: 'JAN-QUALITY',
  REGISTER_INCIDENT: 'JAN-INCIDENTS',
  PREPARE_PAYROLL_EXPORT: 'JAN-PAYROLL',
  PREPARE_CLIENT_REPORT: 'JAN-REPORTING',
  REQUEST_BUDGET: 'CORP-FINANCE'
};
const routeDivisions = Object.fromEntries(Object.keys(routes).map(intent => [intent, 'JANITORIAL']));
const sensitive = new Set(['REQUEST_BUDGET', 'PREPARE_PAYROLL_EXPORT', 'APPROVE_CONTRACT', 'CHANGE_EMPLOYEE_STATUS']);

export function routeEnvelope(message) {
  const validation = validateEnvelope(message);
  if (!validation.valid) return { status: 'REJECTED', errors: validation.errors };
  const expected = routes[message.intent];
  if (!expected) return { status: 'ESCALATED', reason: 'INTENT_NOT_REGISTERED', to: 'INFANTE' };
  if (message.to.agentId !== expected) return { status: 'REJECTED', errors: [`Destino incorrecto para ${message.intent}: esperado ${expected}`] };
  if (message.scope.divisionId !== routeDivisions[message.intent] && !message.scope.divisionId.startsWith('CORP')) return { status: 'ESCALATED', reason: 'DIVISION_SCOPE_MISMATCH', to: 'INFANTE' };
  const needsApproval = sensitive.has(message.intent) || message.requiresHumanApproval === true;
  return { status: needsApproval ? 'WAITING_APPROVAL' : 'ACCEPTED', assignedAgent: expected, requiresHumanApproval: needsApproval, scope: message.scope };
}

export function registerRoute(intent, agentId, divisionId) {
  if (!intent || !agentId || !divisionId) throw new Error('intent, agentId y divisionId son obligatorios');
  routes[intent] = agentId;
  routeDivisions[intent] = divisionId;
  return { intent, agentId, divisionId, registered: true };
}
