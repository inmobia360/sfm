import assert from 'node:assert/strict';
import { isResourceInContext, resolveRequestContext } from '../src/request-context.mjs';

const base = { tenantId: 'TENANT-001', actorId: 'JAN-007', role: 'WORKER', divisionId: 'JANITORIAL', siteIds: ['C-001', 'C-001'], employeeId: 'JAN-007', requestId: 'REQ-1', traceId: 'TRACE-1' };
const context = resolveRequestContext(base);
assert.deepEqual(context.siteIds, ['C-001']);
assert.equal(isResourceInContext(context, { tenantId: 'TENANT-001', divisionId: 'JANITORIAL', siteId: 'C-001', employeeId: 'JAN-007' }), true);
assert.equal(isResourceInContext(context, { tenantId: 'TENANT-002', divisionId: 'JANITORIAL', siteId: 'C-001', employeeId: 'JAN-007' }), false);
assert.equal(isResourceInContext(context, { tenantId: 'TENANT-001', divisionId: 'SECURITY', siteId: 'C-001', employeeId: 'JAN-007' }), false);
assert.equal(isResourceInContext(context, { tenantId: 'TENANT-001', divisionId: 'JANITORIAL', siteId: 'C-001', employeeId: 'JAN-008' }), false);
assert.throws(() => resolveRequestContext({ ...base, traceId: '' }), /REQUEST_CONTEXT_INCOMPLETE/);
assert.throws(() => resolveRequestContext({ ...base, employeeId: 'JAN-008' }), /WORKER_SCOPE/);
console.log('REQUEST CONTEXT TEST OK · tenant · división · alcance · trabajador');
