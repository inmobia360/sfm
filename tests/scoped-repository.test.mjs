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
const saved = repository.append(context, { id: 'D', tenantId: 'TENANT-001', divisionId: 'JANITORIAL', siteId: 'C-001' });
assert.equal(saved.id, 'D'); assert.ok(saved.createdAt && saved.updatedAt);
assert.equal(repository.size(), 4);
assert.throws(() => repository.transaction(context, tx => { tx.append({ id: 'E', tenantId: 'TENANT-001', divisionId: 'JANITORIAL', siteId: 'C-001' }); throw new Error('ROLLBACK'); }), /ROLLBACK/);
assert.equal(repository.size(), 4);
repository.transaction(context, tx => tx.append({ id: 'E', tenantId: 'TENANT-001', divisionId: 'JANITORIAL', siteId: 'C-001' }));
assert.equal(repository.size(), 5);
console.log('SCOPED REPOSITORY TEST OK · tenant · división · lectura · escritura');
