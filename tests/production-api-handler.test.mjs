import assert from 'node:assert/strict';
import { createProductionApiHandler } from '../src/production-api-handler.mjs';
import { createScopedRepository } from '../src/scoped-repository.mjs';

const audit = [];
const approvals = new Map();
const context = { tenantId: 'TENANT-001', actorId: 'JANITORIAL', role: 'CEO', divisionId: 'JANITORIAL', siteIds: ['C-001'], requestId: 'REQ-1', traceId: 'TRACE-1' };
const repository = createScopedRepository({ records: [
  { id: 'EMP-1', kind: 'employee', tenantId: 'TENANT-001', divisionId: 'JANITORIAL', siteId: 'C-001' },
  { id: 'SITE-1', kind: 'site', tenantId: 'TENANT-001', divisionId: 'JANITORIAL', siteId: 'C-001' },
  { id: 'EMP-2', kind: 'employee', tenantId: 'TENANT-002', divisionId: 'JANITORIAL', siteId: 'C-001' }
] });
const handle = createProductionApiHandler({ repository, audit, approvals });
assert.equal((await handle({ path: '/v1/me', context })).status, 200);
assert.equal((await handle({ path: '/v1/divisions/JANITORIAL/dashboard', context })).body.synthetic, true);
assert.equal((await handle({ path: '/v1/divisions/JANITORIAL/dashboard', context })).body.employees, 1);
assert.equal((await handle({ path: '/v1/divisions/JANITORIAL/dashboard', context })).body.sites, 1);
const auditRead = await handle({ path: '/v1/audit-events', context });
assert.equal(auditRead.status, 200);
assert.ok(auditRead.body.events.every(event => event.tenantId === 'TENANT-001'));
const workerAudit = await handle({ path: '/v1/audit-events', context: { ...context, actorId: 'JAN-007', role: 'WORKER', employeeId: 'JAN-007' } });
assert.equal(workerAudit.status, 403);
const resource = { tenantId: 'TENANT-001', divisionId: 'JANITORIAL', siteId: 'C-001' };
const pending = await handle({ method: 'POST', path: '/v1/budget', context, action: 'MANAGE_BUDGET', intent: 'REQUEST_BUDGET', resource, idempotencyKey: 'KEY-1' });
assert.equal(pending.body.status, 'PENDING_APPROVAL');
assert.equal(pending.body.approvalId, 'APR-1');
assert.equal((await handle({ path: '/v1/approvals', context })).body.approvals.length, 1);
const approved = await handle({ method: 'POST', path: '/v1/approvals/APR-1/decision', context, decision: { status: 'APPROVED', approvedBy: 'HUMAN-001' } });
assert.equal(approved.body.status, 'READY');
assert.equal((await handle({ method: 'POST', path: '/v1/budget', context, action: 'MANAGE_BUDGET', intent: 'REQUEST_BUDGET', resource, decision: { status: 'APPROVED', approvedBy: 'HUMAN-001' }, idempotencyKey: 'KEY-2' })).body.status, 'READY');
const pendingReject = await handle({ method: 'POST', path: '/v1/budget', context, action: 'MANAGE_BUDGET', intent: 'REQUEST_BUDGET', resource, idempotencyKey: 'KEY-3' });
assert.equal(pendingReject.body.approvalId, 'APR-2');
const foreignApproval = await handle({ method: 'POST', path: '/v1/approvals/APR-2/decision', context: { ...context, tenantId: 'TENANT-002' }, decision: { status: 'APPROVED', approvedBy: 'HUMAN-002' } });
assert.equal(foreignApproval.status, 403);
const rejected = await handle({ method: 'POST', path: '/v1/approvals/APR-2/decision', context, decision: { status: 'REJECTED', approvedBy: 'HUMAN-001' } });
assert.equal(rejected.body.status, 'REJECTED');
assert.equal((await handle({ path: '/v1/approvals', context })).body.approvals.length, 0);
assert.equal((await handle({ method: 'POST', path: '/v1/budget', context, action: 'MANAGE_BUDGET', intent: 'REQUEST_BUDGET', resource, idempotencyKey: 'KEY-1' })).status, 409);
assert.equal(audit.length, 12);
assert.ok(audit.every(event => event.tenantId === 'TENANT-001' && event.createdAt && event.updatedAt));
assert.equal(audit[0].status, 'READ');
console.log('PRODUCTION API HANDLER TEST OK · me · dashboard · approval · idempotency · audit');
