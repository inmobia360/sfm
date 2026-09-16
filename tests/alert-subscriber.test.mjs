import assert from 'node:assert/strict';
import { createEventBus } from '../src/event-bus.mjs';
import { connectAlertSubscriber } from '../src/alert-subscriber.mjs';

const bus = createEventBus(); const alerts = []; const stop = connectAlertSubscriber(bus, alert => alerts.push(alert));
bus.publish('AGENT_HANDOFF', { messageId: 'MSG-7', correlationId: 'FLOW-7', actor: 'JAN-QUALITY', status: 'REJECTED', at: '2026-09-16T12:00:00Z' });
bus.publish('AGENT_HANDOFF', { messageId: 'MSG-8', correlationId: 'FLOW-8', actor: 'JAN-QUALITY', status: 'COMPLETED', at: '2026-09-16T12:01:00Z' });
assert.equal(alerts.length, 1); assert.equal(alerts[0].owner, 'INFANTE'); assert.equal(alerts[0].severity, 'MEDIUM');
stop(); bus.publish('AGENT_HANDOFF', { messageId: 'MSG-9', status: 'FAILED', at: '2026-09-16T12:02:00Z' }); assert.equal(alerts.length, 1);
console.log('ALERT SUBSCRIBER TEST OK · escalado · severidad · desconexión');
