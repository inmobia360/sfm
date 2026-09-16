import assert from 'node:assert/strict';
import { createAgentSystem } from '../src/agent-system.mjs';
import { checkAgentSystem } from '../src/health-check.mjs';

const report = checkAgentSystem(createAgentSystem());
assert.equal(report.ok, true); assert.equal(Object.values(report.checks).every(Boolean), true);
assert.equal(checkAgentSystem(null).ok, false);
console.log('HEALTH CHECK TEST OK · registro · bus · audit · dispatch');
