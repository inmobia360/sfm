import { isResourceInContext, resolveRequestContext } from './request-context.mjs';

export function createScopedRepository({ records = [] } = {}) {
  const store = [...records];
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
    size() { return store.length; }
  };
}
