import assert from 'node:assert/strict';
import { createScopedRepository } from '../src/scoped-repository.mjs';

const context = { tenantId: 'TENANT-001', actorId: 'JANITORIAL', role: 'CEO', divisionId: 'JANITORIAL', siteIds: ['C-001'], requestId: 'REQ-1', traceId: 'TRACE-1' };
const repository = createScopedRepository({ records: [
  { id: 'A', tenantId: 'TENANT-001', divisionId: 'JANITORIAL', siteId: 'C-001' },
  { id: 'B', tenantId: 'TENANT-002', divisionId: 'JANITORIAL', siteId: 'C-001' },
  { id: 'C', tenantId: 'TENANT-001', divisionId: 'SECURITY', siteId: 'C-001' }
] });
assert.deepEqual(repository.list(context).map(record => record.id), ['A']);
assert.throws(() => repository.append(context, { id: 'X', tenantId: 'TENANT-001', divisionId: 'SECURITY', siteId: 'C-001' }), /SCOPE_DENIED/);
assert.equal(repository.append(context, { id: 'D', tenantId: 'TENANT-001', divisionId: 'JANITORIAL', siteId: 'C-001' }).id, 'D');
assert.equal(repository.size(), 4);
console.log('SCOPED REPOSITORY TEST OK · tenant · división · lectura · escritura');
