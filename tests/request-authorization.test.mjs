import assert from 'node:assert/strict';
import { authorizeRequest } from '../src/request-authorization.mjs';

const context = { tenantId: 'TENANT-001', actorId: 'JANITORIAL', role: 'CEO', divisionId: 'JANITORIAL', siteIds: ['C-001'], requestId: 'REQ-1', traceId: 'TRACE-1' };
const resource = { tenantId: 'TENANT-001', divisionId: 'JANITORIAL', siteId: 'C-001' };
assert.equal(authorizeRequest({ context, action: 'VIEW_DIVISION', resource }).decision, 'ALLOW');
assert.equal(authorizeRequest({ context, action: 'VIEW_DIVISION', resource: { ...resource, tenantId: 'TENANT-002' } }).decision, 'DENY');
assert.equal(authorizeRequest({ context, action: 'MANAGE_BUDGET', resource }).decision, 'ESCALATE');
console.log('REQUEST AUTHORIZATION TEST OK · context · can · tenant isolation · escalate');
