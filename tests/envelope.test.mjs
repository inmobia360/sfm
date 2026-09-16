import assert from 'node:assert/strict';
import { canComplete, validateEnvelope } from '../src/agent-envelope.mjs';

const base = { messageId: 'MSG-1', correlationId: 'FLOW-1', createdAt: '2026-09-16T12:00:00Z', from: { agentId: 'INFANTE' }, to: { agentId: 'JAN-ONBOARDING' }, intent: 'CREATE_ONBOARDING_PLAN', priority: 'HIGH', scope: { divisionId: 'JANITORIAL', siteIds: ['C-001'] }, payload: { employeeId: 'JAN-011' }, requiresHumanApproval: false, status: 'REQUESTED' };
assert.deepEqual(validateEnvelope(base), { valid: true, errors: [] });
assert.equal(canComplete(base), true);
const approval = { ...base, requiresHumanApproval: true, status: 'COMPLETED' };
assert.equal(validateEnvelope(approval).valid, false);
assert.equal(canComplete({ ...approval, approvedBy: 'HUMAN-001' }), true);
assert.equal(validateEnvelope({ ...base, to: { agentId: 'INFANTE' } }).valid, false);
console.log('ENVELOPE TEST OK · validación · aislamiento · aprobación humana');
