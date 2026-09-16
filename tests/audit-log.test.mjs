import assert from 'node:assert/strict';
import { createAuditLog } from '../src/audit-log.mjs';

const log = createAuditLog();
log.append({ event: 'AGENT_HANDOFF', actor: 'INFANTE', target: 'JAN-QUALITY', divisionId: 'JANITORIAL', correlationId: 'FLOW-4', at: '2026-09-16T12:00:00Z' });
log.append({ event: 'TASK_STATUS_CHANGED', actor: 'JAN-QUALITY', divisionId: 'JANITORIAL', correlationId: 'FLOW-4', at: '2026-09-16T12:01:00Z' });
assert.equal(log.query({ correlationId: 'FLOW-4' }).length, 2);
assert.equal(log.query({ actor: 'INFANTE' }).length, 1);
assert.equal(log.all()[0].id, 'AUD-00001');
assert.throws(() => log.append({ event: 'BAD' }));
console.log('AUDIT LOG TEST OK · append · consulta · correlación');
