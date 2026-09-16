export function createStateStore(initialState = {}) {
  let state = structuredClone(initialState);
  const listeners = new Set();
  const notify = () => { for (const listener of listeners) listener(structuredClone(state)); };
  return {
    load() { return structuredClone(state); },
    commit(mutator) { const next = mutator(structuredClone(state)); if (!next || typeof next !== 'object') throw new Error('STATE_MUTATION_INVALID'); state = next; notify(); return structuredClone(state); },
    publish(next) { if (!next || typeof next !== 'object') throw new Error('STATE_PUBLICATION_INVALID'); state = structuredClone(next); notify(); return structuredClone(state); },
    subscribe(listener) { if (typeof listener !== 'function') throw new Error('STATE_LISTENER_INVALID'); listeners.add(listener); return () => listeners.delete(listener); }
  };
}
