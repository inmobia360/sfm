import assert from 'node:assert/strict';
import { createEventBus } from '../src/event-bus.mjs';

const bus = createEventBus(); let received = 0; let wildcard = '';
const stop = bus.subscribe('TASK_STATUS_CHANGED', event => { received += event.taskId ? 1 : 0; });
bus.subscribe('*', event => { wildcard = event.eventName; });
bus.publish('TASK_STATUS_CHANGED', { taskId: 'T-1042' });
assert.equal(received, 1); assert.equal(wildcard, 'TASK_STATUS_CHANGED');
stop(); bus.publish('TASK_STATUS_CHANGED', { taskId: 'T-1043' }); assert.equal(received, 1);
console.log('EVENT BUS TEST OK · suscripción · publicación · cancelación');
