import assert from 'node:assert/strict';
import { createProductionApiHandler } from '../src/production-api-handler.mjs';

const audit = [];
const handle = createProductionApiHandler({ state: { employees: [{ id: 'JAN-001' }], sites: [{ id: 'C-001' }] }, audit });
const context = { tenantId: 'TENANT-001', actorId: 'JANITORIAL', role: 'CEO', divisionId: 'JANITORIAL', siteIds: ['C-001'], requestId: 'REQ-1', traceId: 'TRACE-1' };
assert.equal(handle({ path: '/v1/me', context }).status, 200);
assert.equal(handle({ path: '/v1/divisions/JANITORIAL/dashboard', context }).body.synthetic, true);
const resource = { tenantId: 'TENANT-001', divisionId: 'JANITORIAL', siteId: 'C-001' };
assert.equal(handle({ method: 'POST', path: '/v1/budget', context, action: 'MANAGE_BUDGET', intent: 'REQUEST_BUDGET', resource, idempotencyKey: 'KEY-1' }).body.status, 'PENDING_APPROVAL');
assert.equal(handle({ method: 'POST', path: '/v1/budget', context, action: 'MANAGE_BUDGET', intent: 'REQUEST_BUDGET', resource, decision: { status: 'APPROVED', approvedBy: 'HUMAN-001' }, idempotencyKey: 'KEY-2' }).body.status, 'READY');
assert.equal(handle({ method: 'POST', path: '/v1/budget', context, action: 'MANAGE_BUDGET', intent: 'REQUEST_BUDGET', resource, idempotencyKey: 'KEY-1' }).status, 409);
assert.equal(audit.length, 2);
console.log('PRODUCTION API HANDLER TEST OK · me · dashboard · approval · idempotency · audit');
