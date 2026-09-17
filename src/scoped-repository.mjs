import { isResourceInContext, resolveRequestContext } from './request-context.mjs';

export function createScopedRepository({ records = [] } = {}) {
  let store = [...records];
  return {
    list(context, predicate = () => true) {
      const resolved = resolveRequestContext(context);
      return store.filter(record => isResourceInContext(resolved, record) && predicate(record)).map(record => ({ ...record }));
    },
    append(context, record) {
      const resolved = resolveRequestContext(context);
      if (!isResourceInContext(resolved, record)) throw new Error('REPOSITORY_SCOPE_DENIED');
      const saved = { ...record, tenantId: resolved.tenantId, divisionId: resolved.divisionId };
      store.push(saved);
      return { ...saved };
    },
    transaction(context, callback) {
      const resolved = resolveRequestContext(context);
      const working = store.map(record => ({ ...record }));
      const tx = { list: (predicate = () => true) => working.filter(record => isResourceInContext(resolved, record) && predicate(record)).map(record => ({ ...record })), append: record => { if (!isResourceInContext(resolved, record)) throw new Error('REPOSITORY_SCOPE_DENIED'); const saved = { ...record, tenantId: resolved.tenantId, divisionId: resolved.divisionId }; working.push(saved); return { ...saved }; } };
      const result = callback(tx);
      store = working;
      return result;
    },
    size() { return store.length; }
  };
}
