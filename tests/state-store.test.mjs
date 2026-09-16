import assert from 'node:assert/strict';
import { createStateStore } from '../src/state-store.mjs';

const store = createStateStore({ count: 0 }); let observed = 0;
const unsubscribe = store.subscribe(next => { observed = next.count; });
assert.deepEqual(store.commit(next => ({ count: next.count + 1 })), { count: 1 });
assert.equal(observed, 1); assert.deepEqual(store.load(), { count: 1 });
unsubscribe(); store.publish({ count: 5 }); assert.equal(observed, 1);
assert.throws(() => store.commit(() => null), /STATE_MUTATION_INVALID/);
assert.throws(() => store.publish(null), /STATE_PUBLICATION_INVALID/);
assert.throws(() => store.subscribe(null), /STATE_LISTENER_INVALID/);
console.log('STATE STORE TEST OK · load · commit · publish · subscribe');
