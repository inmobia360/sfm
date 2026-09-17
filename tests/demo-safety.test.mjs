import assert from 'node:assert/strict';
import fs from 'node:fs';

const pages = ['index.html', 'launch.html', 'ceo.html', 'scenarios.html', 'worker.html', 'training.html', 'report.html', 'audit.html', 'notifications.html', 'integrations.html', 'role-context.html'];
for (const page of pages) {
  const text = fs.readFileSync(new URL(`../${page}`, import.meta.url), 'utf8').toLowerCase();
  assert.match(text, /demo|sint[eé]tic/, `${page} debe identificar el entorno demo`);
}
console.log('DEMO SAFETY TEST OK · banner · datos sintéticos · vistas públicas');
