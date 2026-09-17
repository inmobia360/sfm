import assert from 'node:assert/strict';
import { createProductionApiHandler } from '../src/production-api-handler.mjs';
import { createScopedRepository } from '../src/scoped-repository.mjs';

const audit = [];
const context = { tenantId: 'TENANT-001', actorId: 'JANITORIAL', role: 'CEO', divisionId: 'JANITORIAL', siteIds: ['C-001'], requestId: 'REQ-1', traceId: 'TRACE-1' };
const repository = createScopedRepository({ records: [
  { id: 'EMP-1', kind: 'employee', tenantId: 'TENANT-001', divisionId: 'JANITORIAL', siteId: 'C-001' },
  { id: 'SITE-1', kind: 'site', tenantId: 'TENANT-001', divisionId: 'JANITORIAL', siteId: 'C-001' },
  { id: 'EMP-2', kind: 'employee', tenantId: 'TENANT-002', divisionId: 'JANITORIAL', siteId: 'C-001' }
] });
const handle = createProductionApiHandler({ repository, audit });
assert.equal(handle({ path: '/v1/me', context }).status, 200);
assert.equal(handle({ path: '/v1/divisions/JANITORIAL/dashboard', context }).body.synthetic, true);
assert.equal(handle({ path: '/v1/divisions/JANITORIAL/dashboard', context }).body.employees, 1);
assert.equal(handle({ path: '/v1/divisions/JANITORIAL/dashboard', context }).body.sites, 1);
const resource = { tenantId: 'TENANT-001', divisionId: 'JANITORIAL', siteId: 'C-001' };
assert.equal(handle({ method: 'POST', path: '/v1/budget', context, action: 'MANAGE_BUDGET', intent: 'REQUEST_BUDGET', resource, idempotencyKey: 'KEY-1' }).body.status, 'PENDING_APPROVAL');
assert.equal(handle({ method: 'POST', path: '/v1/budget', context, action: 'MANAGE_BUDGET', intent: 'REQUEST_BUDGET', resource, decision: { status: 'APPROVED', approvedBy: 'HUMAN-001' }, idempotencyKey: 'KEY-2' }).body.status, 'READY');
assert.equal(handle({ method: 'POST', path: '/v1/budget', context, action: 'MANAGE_BUDGET', intent: 'REQUEST_BUDGET', resource, idempotencyKey: 'KEY-1' }).status, 409);
assert.equal(audit.length, 4);
assert.ok(audit.every(event => event.tenantId === 'TENANT-001' && event.createdAt && event.updatedAt));
assert.equal(audit[0].status, 'READ');
console.log('PRODUCTION API HANDLER TEST OK · me · dashboard · approval · idempotency · audit');
