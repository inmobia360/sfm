import assert from 'node:assert/strict';
import { createAuditLog } from '../src/audit-log.mjs';
import { createEventBus } from '../src/event-bus.mjs';
import { connectAuditSubscriber } from '../src/audit-subscriber.mjs';

const bus = createEventBus(); const log = createAuditLog();
const stop = connectAuditSubscriber(bus, log);
bus.publish('AGENT_HANDOFF', { messageId: 'MSG-5', correlationId: 'FLOW-5', actor: 'INFANTE', target: 'JAN-QUALITY', status: 'ACCEPTED', at: '2026-09-16T12:00:00Z' });
assert.equal(log.query({ correlationId: 'FLOW-5' }).length, 1);
stop(); bus.publish('AGENT_HANDOFF', { messageId: 'MSG-6', correlationId: 'FLOW-6', actor: 'INFANTE', at: '2026-09-16T12:01:00Z' });
assert.equal(log.all().length, 1);
console.log('AUDIT SUBSCRIBER TEST OK · bus · persistencia · desconexión');
