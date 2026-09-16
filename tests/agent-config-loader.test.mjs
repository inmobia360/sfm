import assert from 'node:assert/strict';
import { loadAgentConfig } from '../src/agent-config-loader.mjs';

const config = await loadAgentConfig(new URL('../agent-config.json', import.meta.url));
assert.equal(config.director, 'INFANTE'); assert.equal(config.activeDivisions[0], 'JANITORIAL');
await assert.rejects(() => loadAgentConfig(new URL('../missing-config.json', import.meta.url)));
console.log('CONFIG LOADER TEST OK · director · duplicados · governance');
