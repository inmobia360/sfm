import assert from 'node:assert/strict';
import fs from 'node:fs';
import config from '../agent-config.json' with { type: 'json' };

const catalog = fs.readFileSync(new URL('../docs/agents/agent-catalog.md', import.meta.url), 'utf8');
for (const agent of config.activeAgents) {
  const documented = agent.agentId === 'INFANTE' ? catalog.includes('## Nivel 0 — INFANTE') : agent.agentId === 'JANITORIAL' ? catalog.includes('## Nivel 1 — JANITORIAL') : catalog.includes('`' + agent.agentId + '`');
  assert.equal(documented, true, `Agente sin catálogo: ${agent.agentId}`);
}
for (const agentId of config.developmentAgents) assert.match(catalog, new RegExp('`' + agentId + '`'), `Agente de desarrollo sin catálogo: ${agentId}`);
console.log(`CATALOG COHERENCE TEST OK · ${config.activeAgents.length} activos · ${config.developmentAgents.length} desarrollo`);
