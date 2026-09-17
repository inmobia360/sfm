import assert from 'node:assert/strict';
import { createDemoServer } from '../scripts/demo-server.mjs';

const demo = createDemoServer({ port: 0 });
await demo.listen();
try {
  const address = demo.server.address();
  const base = `http://127.0.0.1:${address.port}`;
const page = await fetch(`${base}/launch.html`);
assert.equal(page.status, 200);
assert.match(await page.text(), /SFM Operations Intelligence/);
const moduleResponse = await fetch(`${base}/src/worker-actions.mjs`);
assert.equal(moduleResponse.headers.get('content-type'), 'text/javascript; charset=utf-8');
  const traversal = await fetch(`${base}/%252e%252e%252fpackage.json`);
  assert.equal(traversal.status, 404);
  const internal = await fetch(`${base}/.git/config`);
  assert.equal(internal.status, 404);
  const method = await fetch(`${base}/launch.html`, { method: 'POST' });
  assert.equal(method.status, 405);
} finally {
  await demo.close();
}
console.log('DEMO SERVER TEST OK · static serving · traversal · methods');
