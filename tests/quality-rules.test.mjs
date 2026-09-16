import assert from 'node:assert/strict';
import { classifyIncident, closeCorrectiveAction } from '../src/quality-rules.mjs';

const high = classifyIncident({ id: 'INC-021', site: 'C-001', category: 'Limpieza', priority: 'Alta' });
assert.equal(high.requiresEscalation, true); assert.equal(high.owner, 'JAN-QUALITY');
const closed = closeCorrectiveAction(high, { description: 'Revisar frecuencia', status: 'VERIFIED' });
assert.equal(closed.status, 'CLOSED');
assert.throws(() => closeCorrectiveAction(high, { description: 'Pendiente', status: 'OPEN' }), /NOT_VERIFIED/);
const medium = classifyIncident({ id: 'INC-022', site: 'C-003', category: 'Fichajes', priority: 'Media' });
assert.equal(medium.owner, 'JAN-SUPERVISOR');
console.log('QUALITY RULES TEST OK · prioridad · escalado · acción correctiva');
