import assert from 'node:assert/strict';
import config from '../agent-config.json' with { type: 'json' };
import { activateDivision } from '../src/division-lifecycle.mjs';

const next = activateDivision(config, 'SECURITY');
assert.equal(next.activeDivisions.includes('SECURITY'), true);
assert.equal(next.preparedDivisions.includes('SECURITY'), false);
assert.equal(next.divisionActivation.approvedBy, 'INFANTE');
assert.throws(() => activateDivision(config, 'SECURITY', 'JANITORIAL'), /DIRECTOR_APPROVAL_REQUIRED/);
assert.throws(() => activateDivision(config, 'UNKNOWN'), /DIVISION_NOT_PREPARED/);
console.log('DIVISION LIFECYCLE TEST OK · preparada · aprobación INFANTE · activación');
