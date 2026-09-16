import assert from 'node:assert/strict';
import { completeChecklist, createWorkerIncident, evaluateClock } from '../src/worker-actions.mjs';

assert.equal(evaluateClock({ action: 'CLOCK_IN', distance: 42 }).status, 'PROVISIONAL');
assert.equal(evaluateClock({ action: 'CLOCK_IN', distance: 140 }).status, 'REVIEW_REQUIRED');
assert.equal(evaluateClock({ action: 'CLOCK_OUT' }).status, 'PENDING_APPROVAL');
assert.deepEqual(completeChecklist([true, true, true]), { completed: 3, total: 3, canClose: true, status: 'REVIEW' });
assert.equal(completeChecklist([true, false]).canClose, false);
assert.equal(createWorkerIncident({ id: 'INC-023', site: 'C-001', category: 'Limpieza', priority: 'Media', title: 'Revisión' }).requiresApproval, true);
assert.throws(() => createWorkerIncident({ id: 'INC-024' }), /INCIDENT_FIELDS_REQUIRED/);
console.log('WORKER ACTIONS TEST OK · fichaje · checklist · incidencia');
