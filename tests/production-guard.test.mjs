import assert from 'node:assert/strict';
import { assertProductionReady, evaluateProductionReadiness } from '../src/production-guard.mjs';

assert.deepEqual(evaluateProductionReadiness(), { allowed: true, environment: 'demo', requested: [], blockers: [] });
const blocked = evaluateProductionReadiness({ capabilities: ['REAL_DATA', 'LEGAL_PAYROLL'] });
assert.equal(blocked.allowed, false);
assert.ok(blocked.blockers.includes('DEMO_CANNOT_ENABLE_PRODUCTION_CAPABILITY'));
assert.throws(() => assertProductionReady({ environment: 'production', capabilities: ['CONTINUOUS_GPS'] }), /HUMAN_APPROVAL_REQUIRED/);
assert.equal(assertProductionReady({ environment: 'production', capabilities: ['REAL_DATA'], humanApproval: true }).allowed, true);
console.log('PRODUCTION GUARD TEST OK · demo · capacidades sensibles · aprobación');
