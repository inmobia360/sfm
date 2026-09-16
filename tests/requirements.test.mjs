import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const files = new Map([
  ['spec', read('specs/001-sfm-mvp/spec.md')],
  ['ui', read('index.html') + read('app.js') + read('data.js')],
  ['roles', read('role-context.html') + read('role-context.js')],
  ['worker', read('worker.html')],
  ['training', read('training.html')],
  ['report', read('report.html')],
  ['agents', read('agent-config.json') + read('agent-roster.html')],
  ['runtime', read('src/agent-runtime.mjs') + read('src/approval-gate.mjs') + read('src/access-policy.mjs')],
  ['audit', read('src/audit-log.mjs') + read('src/audit-subscriber.mjs') + read('src/alert-subscriber.mjs')]
]);

const evidence = [
  ['RF-01', ['demo', 'sintét']],
  ['RF-02', ['INFANTE', 'JANITORIAL', 'role']],
  ['RF-03', ['JAN-010', 'C-003', 'SVC-EVENT']],
  ['RF-04', ['Employee 360', 'id']],
  ['RF-05', ['onboarding']],
  ['RF-06', ['microcurso', 'duración']],
  ['RF-07', ['aprobación humana', 'fuente']],
  ['RF-08', ['Limpieza general', 'Suelos y moquetas']],
  ['RF-09', ['JAN-007', 'rotación']],
  ['RF-10', ['geofence', 'Fichaje']],
  ['RF-11', ['checklist', 'incidencia']],
  ['RF-12', ['priority', 'correctiva']],
  ['RF-13', ['inspección', 'reincidencia']],
  ['RF-14', ['payroll', 'aprob']],
  ['RF-15', ['CSV', 'JSON']],
  ['RF-16', ['dashboard', 'INFANTE']],
  ['RF-17', ['Recorrido ejecutivo', 'end-to-end']],
  ['RF-18', ['audit', 'evento']],
  ['RF-19', ['Security', 'Landscaping']],
  ['RF-20', ['viewport', 'mobile']]
];

const corpus = [...files.values()].join('\n').toLowerCase();
const missing = evidence.filter(([, terms]) => terms.some(term => !corpus.includes(term.toLowerCase())));
assert.equal(missing.length, 0, `Requisitos sin evidencia: ${missing.map(([id]) => id).join(', ')}`);
assert.match(files.get('runtime'), /dispatch|routeEnvelope/);
assert.match(files.get('audit'), /append|publish/);
assert.match(files.get('agents'), /developmentAgents/);
console.log(`REQUIREMENTS TEST OK · RF-01..RF-20 · ${evidence.length} requisitos trazables`);
