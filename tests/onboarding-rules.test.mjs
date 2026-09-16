import assert from 'node:assert/strict';
import { assignOnboarding, evaluateOnboarding } from '../src/onboarding-rules.mjs';

const requirements = { global: [{ id: 'G-001', status: 'COMPLETED' }], roleSite: [{ id: 'RS-001', status: 'PENDING' }] };
assert.equal(evaluateOnboarding(requirements).readyForOperations, false);
assert.deepEqual(evaluateOnboarding({ global: requirements.global, roleSite: [{ id: 'RS-001', status: 'COMPLETED' }] }).missing, []);
assert.equal(assignOnboarding('JAN-011', requirements).status, 'ASSIGNED');
assert.throws(() => assignOnboarding('JAN-011', {}), /ONBOARDING_REQUIREMENTS_REQUIRED/);
console.log('ONBOARDING RULES TEST OK · global · puesto/centro · readiness');
