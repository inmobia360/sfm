const SENSITIVE_CAPABILITIES = new Set([
  'REAL_DATA', 'CONTINUOUS_GPS', 'LEGAL_PAYROLL', 'EXTERNAL_INTEGRATIONS'
]);

export function evaluateProductionReadiness({ environment = 'demo', capabilities = [], humanApproval = false } = {}) {
  const requested = capabilities.filter(capability => SENSITIVE_CAPABILITIES.has(capability));
  const blockers = [];
  if (environment === 'demo' && requested.length) blockers.push('DEMO_CANNOT_ENABLE_PRODUCTION_CAPABILITY');
  if (requested.length && !humanApproval) blockers.push('HUMAN_APPROVAL_REQUIRED');
  return { allowed: blockers.length === 0, environment, requested, blockers };
}

export function assertProductionReady(input) {
  const decision = evaluateProductionReadiness(input);
  if (!decision.allowed) {
    const error = new Error(decision.blockers.join('|'));
    error.code = 'PRODUCTION_GUARD_BLOCKED';
    error.decision = decision;
    throw error;
  }
  return decision;
}
