export function createEventBus() {
  const listeners = new Map();
  return {
    subscribe(eventName, handler) {
      if (!listeners.has(eventName)) listeners.set(eventName, new Set());
      listeners.get(eventName).add(handler);
      return () => listeners.get(eventName)?.delete(handler);
    },
    publish(eventName, payload) {
      for (const handler of listeners.get(eventName) || []) handler(payload);
      for (const handler of listeners.get('*') || []) handler({ eventName, payload });
    }
  };
}
