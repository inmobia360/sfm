import assert from 'node:assert/strict';
import { loadAgentConfig, validateAgentConfig } from '../src/agent-config-loader.mjs';

const config = await loadAgentConfig(new URL('../agent-config.json', import.meta.url));
assert.equal(config.director, 'INFANTE'); assert.equal(config.activeDivisions[0], 'JANITORIAL'); assert.equal(config.activeAgents.length, 26); assert.equal(config.developmentAgents.length, 9);
await assert.rejects(() => loadAgentConfig(new URL('../missing-config.json', import.meta.url)));
const valid = { ...config, activeAgents: config.activeAgents.map(agent => ({ ...agent })) };
assert.throws(() => validateAgentConfig({ ...valid, activeAgents: [{ agentId: 'INFANTE', role: 'DIRECTOR', divisionId: 'CORP' }, { agentId: 'INFANTE', role: 'STAFF', divisionId: 'CORP' }] }), /duplicado/);
assert.throws(() => validateAgentConfig({ ...valid, activeAgents: [{ agentId: 'INFANTE', role: 'DIRECTOR', divisionId: 'JANITORIAL' }] }), /CORP/);
assert.throws(() => validateAgentConfig({ ...valid, developmentAgents: ['DEV-UX', 'DEV-UX'] }), /developmentAgent duplicado/);
assert.throws(() => validateAgentConfig({ ...valid, activeAgents: [...valid.activeAgents, { agentId: 'SEC-001', role: 'SPECIALIST', divisionId: 'SECURITY' }] }), /división no activa/);
assert.throws(() => validateAgentConfig({ ...valid, preparedDivisions: ['JANITORIAL'] }), /activa y preparada/);
assert.throws(() => validateAgentConfig({ ...valid, activeDivisions: ['JANITORIAL', 'JANITORIAL'] }), /activeDivision duplicada/);
console.log('CONFIG LOADER TEST OK · director · duplicados · governance');
