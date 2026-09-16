const required = ['messageId', 'correlationId', 'createdAt', 'from', 'to', 'intent', 'priority', 'scope', 'payload', 'requiresHumanApproval', 'status'];
const states = new Set(['REQUESTED', 'ACCEPTED', 'IN_PROGRESS', 'WAITING_APPROVAL', 'COMPLETED', 'REJECTED', 'ESCALATED', 'FAILED']);

export function validateEnvelope(message) {
  const errors = required.filter(field => message?.[field] === undefined).map(field => `Campo obligatorio ausente: ${field}`);
  if (message?.from?.agentId === message?.to?.agentId) errors.push('El origen y el destino no pueden ser el mismo agente');
  if (!message?.scope?.divisionId) errors.push('scope.divisionId es obligatorio');
  if (message?.status && !states.has(message.status)) errors.push(`Estado no permitido: ${message.status}`);
  if (message?.requiresHumanApproval === true && message.status === 'COMPLETED' && !message.approvedBy) errors.push('Falta approvedBy para completar una acción con aprobación humana');
  return { valid: errors.length === 0, errors };
}

export function canComplete(message) {
  return validateEnvelope(message).valid && (!message.requiresHumanApproval || Boolean(message.approvedBy));
}
