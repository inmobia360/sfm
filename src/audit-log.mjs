export function createAuditLog(seed = []) {
  const events = [...seed];
  return {
    append(event) {
      if (!event?.event || !event?.actor || !event?.at) throw new Error('event, actor y at son obligatorios');
      const stored = { ...event, id: event.id || `AUD-${String(events.length + 1).padStart(5, '0')}` };
      events.push(stored);
      return stored;
    },
    query(filters = {}) {
      return events.filter(event => Object.entries(filters).every(([key, value]) => event[key] === value));
    },
    all() { return [...events]; }
  };
}
