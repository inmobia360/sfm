export function createDelegation({ messageId, correlationId, intent, priority = 'NORMAL', scope, destination, acceptance }) {
  if (!messageId || !correlationId || !intent || !scope?.divisionId || !destination || !acceptance) throw new Error('DELEGATION_FIELDS_REQUIRED');
  return { messageId, correlationId, from: { agentId: 'INFANTE', role: 'DIRECTOR', divisionId: 'CORP' }, to: { agentId: destination }, intent, priority, scope, acceptance, status: 'REQUESTED', requiresHumanApproval: false };
}
