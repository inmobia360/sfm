import assert from 'node:assert/strict';
import { evaluateApproval, requiresApproval } from '../src/approval-gate.mjs';

const budget = { intent: 'REQUEST_BUDGET', requiresHumanApproval: false };
assert.equal(requiresApproval(budget), true);
assert.equal(evaluateApproval(budget).status, 'WAITING_APPROVAL');
assert.equal(evaluateApproval(budget, { status: 'APPROVED', approvedBy: 'HUMAN-001' }).status, 'APPROVED');
assert.equal(evaluateApproval(budget, { status: 'REJECTED', approvedBy: 'HUMAN-001', reason: 'Fuera de presupuesto' }).reason, 'Fuera de presupuesto');
assert.equal(evaluateApproval({ intent: 'CREATE_SERVICE_TASK', requiresHumanApproval: false }).status, 'NOT_REQUIRED');
console.log('APPROVAL GATE TEST OK · espera · aprobación · rechazo');
