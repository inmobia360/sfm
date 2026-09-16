export function connectAuditSubscriber(bus, auditLog) {
  if (!bus?.subscribe || !auditLog?.append) throw new Error('bus y auditLog son obligatorios');
  return bus.subscribe('AGENT_HANDOFF', event => {
    if (!event?.messageId || !event?.actor || !event?.at) return;
    auditLog.append({ ...event, event: 'AGENT_HANDOFF' });
  });
}
