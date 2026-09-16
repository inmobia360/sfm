const sensitiveIntents = new Set(['REQUEST_BUDGET', 'APPROVE_CONTRACT', 'PREPARE_PAYROLL_EXPORT', 'CHANGE_EMPLOYEE_STATUS']);

export function requiresApproval(message) {
  return Boolean(message?.requiresHumanApproval) || sensitiveIntents.has(message?.intent);
}

export function evaluateApproval(message, decision) {
  if (!requiresApproval(message)) return { status: 'NOT_REQUIRED' };
  if (!decision?.approvedBy || !['APPROVED', 'REJECTED'].includes(decision.status)) return { status: 'WAITING_APPROVAL', reason: 'HUMAN_DECISION_REQUIRED' };
  return { status: decision.status, approvedBy: decision.approvedBy, decidedAt: decision.decidedAt || new Date().toISOString(), reason: decision.reason || null };
}
