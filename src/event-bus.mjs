export function createEventBus() {
  const listeners = new Map();
  return {
    subscribe(eventName, handler) {
      if (!listeners.has(eventName)) listeners.set(eventName, new Set());
      listeners.get(eventName).add(handler);
      return () => listeners.get(eventName)?.delete(handler);
    },
    publish(eventName, payload) {
      const errors = [];
      for (const handler of [...(listeners.get(eventName) || [])]) { try { handler(payload); } catch (error) { errors.push(error); } }
      for (const handler of [...(listeners.get('*') || [])]) { try { handler({ eventName, payload }); } catch (error) { errors.push(error); } }
      return { delivered: (listeners.get(eventName)?.size || 0) + (listeners.get('*')?.size || 0) - errors.length, errors };
    }
  };
}
