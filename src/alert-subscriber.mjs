const alertStatuses = new Set(['WAITING_APPROVAL', 'REJECTED', 'ESCALATED', 'FAILED']);

export function connectAlertSubscriber(bus, onAlert) {
  if (!bus?.subscribe || typeof onAlert !== 'function') throw new Error('bus y onAlert son obligatorios');
  return bus.subscribe('AGENT_HANDOFF', event => {
    if (alertStatuses.has(event?.status)) onAlert({ type: 'AGENT_ATTENTION_REQUIRED', severity: event.status === 'FAILED' ? 'HIGH' : 'MEDIUM', owner: 'INFANTE', ...event });
  });
}
