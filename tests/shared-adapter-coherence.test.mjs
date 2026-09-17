import assert from 'node:assert/strict';
import fs from 'node:fs';

const root = new URL('../', import.meta.url);
const views = ['worker.html', 'scenarios.html', 'training.html', 'report.html', 'audit.html', 'notifications.html'];
for (const view of views) {
  const text = fs.readFileSync(new URL(view, root), 'utf8');
  assert.match(text, /data\.js/, `${view} debe cargar el adaptador común`);
  assert.doesNotMatch(text, /localStorage\.setItem/, `${view} no debe escribir directamente en localStorage`);
}
console.log('SHARED ADAPTER TEST OK · vistas · data.js · sin writers duplicados');
