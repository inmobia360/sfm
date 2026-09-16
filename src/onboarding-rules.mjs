export function evaluateOnboarding({ global = [], roleSite = [] } = {}) {
  const all = [...global, ...roleSite];
  const completed = all.filter(item => item.status === 'COMPLETED').length;
  const missing = all.filter(item => item.status !== 'COMPLETED').map(item => item.id);
  return { total: all.length, completed, missing, readyForOperations: all.length > 0 && missing.length === 0 };
}

export function assignOnboarding(employeeId, requirements) {
  if (!employeeId || !requirements?.global || !requirements?.roleSite) throw new Error('ONBOARDING_REQUIREMENTS_REQUIRED');
  return { employeeId, global: requirements.global, roleSite: requirements.roleSite, status: 'ASSIGNED' };
}
