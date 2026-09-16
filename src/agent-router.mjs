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
const sensitive = new Set(['REQUEST_BUDGET', 'PREPARE_PAYROLL_EXPORT', 'APPROVE_CONTRACT', 'CHANGE_EMPLOYEE_STATUS']);

export function routeEnvelope(message) {
  const validation = validateEnvelope(message);
  if (!validation.valid) return { status: 'REJECTED', errors: validation.errors };
  const expected = routes[message.intent];
  if (!expected) return { status: 'ESCALATED', reason: 'INTENT_NOT_REGISTERED', to: 'INFANTE' };
  if (message.to.agentId !== expected) return { status: 'REJECTED', errors: [`Destino incorrecto para ${message.intent}: esperado ${expected}`] };
  const needsApproval = sensitive.has(message.intent) || message.requiresHumanApproval === true;
  return { status: needsApproval ? 'WAITING_APPROVAL' : 'ACCEPTED', assignedAgent: expected, requiresHumanApproval: needsApproval, scope: message.scope };
}
