import assert from 'node:assert/strict';
import { prepareGovernedAction } from '../src/governed-action.mjs';

const context = { tenantId: 'TENANT-001', actorId: 'JANITORIAL', role: 'CEO', divisionId: 'JANITORIAL', siteIds: ['C-001'], requestId: 'REQ-1', traceId: 'TRACE-1' };
const resource = { tenantId: 'TENANT-001', divisionId: 'JANITORIAL', siteId: 'C-001' };
assert.equal(prepareGovernedAction({ context, action: 'MANAGE_BUDGET', resource, intent: 'REQUEST_BUDGET' }).status, 'PENDING_APPROVAL');
assert.equal(prepareGovernedAction({ context, action: 'MANAGE_BUDGET', resource, intent: 'REQUEST_BUDGET', decision: { status: 'APPROVED', approvedBy: 'HUMAN-001' } }).status, 'READY');
assert.equal(prepareGovernedAction({ context, action: 'MANAGE_BUDGET', resource, intent: 'REQUEST_BUDGET', decision: { status: 'REJECTED', approvedBy: 'HUMAN-001' } }).status, 'REJECTED');
assert.equal(prepareGovernedAction({ context, action: 'VIEW_DIVISION', resource: { ...resource, tenantId: 'TENANT-002' } }).status, 'DENIED');
console.log('GOVERNED ACTION TEST OK · deny · pending · approved · rejected');
