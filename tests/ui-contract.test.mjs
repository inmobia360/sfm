import assert from 'node:assert/strict';
import fs from 'node:fs';

const pages = ['launch.html', 'index.html', 'ceo.html', 'scenarios.html', 'worker.html', 'training.html', 'report.html', 'audit.html', 'notifications.html'];
for (const page of pages) {
  const html = fs.readFileSync(new URL(`../${page}`, import.meta.url), 'utf8');
  assert.match(html, /<h1\b/i, `${page} must expose a primary heading`);
  assert.match(html, /<script\b/i, `${page} must load its runtime`);
  assert.match(html, /</, `${page} must contain markup`);
}
const worker = fs.readFileSync(new URL('../worker.html', import.meta.url), 'utf8');
assert.match(worker, /id=["']clock["']/i);
assert.match(worker, /id=["']checks["']/i);
console.log('UI CONTRACT TEST OK · 9 vistas · headings · runtime · worker controls');
