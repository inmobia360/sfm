export function classifyIncident(incident) {
  if (!incident?.site || !incident.category || !incident.priority) throw new Error('INCIDENT_CLASSIFICATION_REQUIRED');
  const critical = incident.priority === 'Alta' || incident.priority === 'Crítica';
  return { ...incident, requiresEscalation: critical, owner: critical ? 'JAN-QUALITY' : 'JAN-SUPERVISOR', status: 'OPEN' };
}

export function closeCorrectiveAction(incident, correctiveAction, verifier = 'JAN-QUALITY') {
  if (!incident?.requiresEscalation && incident?.status !== 'IN_REVIEW') throw new Error('INCIDENT_NOT_READY_TO_CLOSE');
  if (!correctiveAction?.description || correctiveAction.status !== 'VERIFIED') throw new Error('CORRECTIVE_ACTION_NOT_VERIFIED');
  return { ...incident, status: 'CLOSED', correctiveAction, verifiedBy: verifier };
}
