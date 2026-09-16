import assert from 'node:assert/strict';
import { createAgentRegistry } from '../src/agent-registry.mjs';

const registry = createAgentRegistry();
assert.equal(registry.get('INFANTE').role, 'DIRECTOR');
assert.equal(registry.all().length, 26);
assert.equal(registry.forDivision('JANITORIAL').every(agent => agent.divisionId === 'JANITORIAL'), true);
assert.equal(registry.forDivision('CORP').some(agent => agent.agentId === 'INFANTE'), true);
registry.register({ agentId: 'SEC-OPERATIONS', role: 'SPECIALIST', divisionId: 'SECURITY', specialty: 'Rondas' });
assert.equal(registry.forDivision('SECURITY').length, 1);
assert.throws(() => registry.register({ agentId: 'BAD' }));
console.log('AGENT REGISTRY TEST OK · registro · especialidad · aislamiento');
