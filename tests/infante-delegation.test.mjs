import assert from 'node:assert/strict';
import { createDelegation } from '../src/infante-delegation.mjs';

const delegation = createDelegation({ messageId: 'MSG-001', correlationId: 'FLOW-001', intent: 'VALIDATE_DEMO_JOURNEY', scope: { divisionId: 'CORP' }, destination: 'DEV-QUALITY-TEST', acceptance: 'RF-01..RF-20 documentados' });
assert.equal(delegation.from.agentId, 'INFANTE'); assert.equal(delegation.status, 'REQUESTED'); assert.equal(delegation.to.agentId, 'DEV-QUALITY-TEST');
assert.throws(() => createDelegation({ messageId: 'MSG-002', correlationId: 'FLOW-002', intent: 'X', scope: {}, destination: 'DEV-DOCS' }), /DELEGATION_FIELDS_REQUIRED/);
console.log('INFANTE DELEGATION TEST OK · sobre · destino · aceptación');
