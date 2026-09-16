export function checkAgentSystem(system) {
  const checks = {
    registry: Boolean(system?.registry?.get('INFANTE')),
    eventBus: Boolean(system?.bus?.publish && system?.bus?.subscribe),
    auditLog: Boolean(system?.auditLog?.append && system?.auditLog?.query),
    alerts: Array.isArray(system?.alerts),
    dispatch: typeof system?.dispatch === 'function'
  };
  return { ok: Object.values(checks).every(Boolean), checks, checkedAt: new Date().toISOString() };
}
