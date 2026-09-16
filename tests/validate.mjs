import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const required = [
  'index.html', 'launch.html', 'ceo.html', 'scenarios.html', 'worker.html', 'audit-enhance.js',
  'training.html', 'report.html', 'audit.html', 'notifications.html', 'role-context.html',
  'integrations.html', 'app.js', 'data.js', 'demo-manifest.json',
  'docs/agents/constitution.md', 'docs/agents/authority-matrix.md',
  'package.json', 'docs/agents/shared-state.md', 'docs/agents/role-enforcement.md', 'docs/agents/message-envelope.md', 'docs/agents/runtime-guide.md', 'docs/agents/implementation-map.md', 'src/agent-envelope.mjs', 'src/agent-router.mjs', 'src/task-state.mjs', 'src/agent-runtime.mjs', 'src/audit-log.mjs', 'src/agent-registry.mjs', 'src/access-policy.mjs', 'src/metrics.mjs', 'src/approval-gate.mjs', 'src/event-bus.mjs', 'tests/envelope.test.mjs', 'tests/router.test.mjs', 'tests/task-state.test.mjs', 'tests/runtime.test.mjs', 'tests/audit-log.test.mjs', 'tests/agent-registry.test.mjs', 'tests/access-policy.test.mjs', 'tests/metrics.test.mjs', 'tests/approval-gate.test.mjs', 'tests/event-bus.test.mjs', 'specs/001-sfm-mvp/spec.md'
];
const failures = [];
const check = (condition, message) => { if (!condition) failures.push(message); };

for (const file of required) check(existsSync(join(root, file)), `Falta archivo requerido: ${file}`);
const index = readFileSync(join(root, 'index.html'), 'utf8');
const manifest = JSON.parse(readFileSync(join(root, 'demo-manifest.json'), 'utf8'));
const catalog = readFileSync(join(root, 'docs/agents/agent-catalog.md'), 'utf8');
const authority = readFileSync(join(root, 'docs/agents/authority-matrix.md'), 'utf8');
const spec = readFileSync(join(root, 'specs/001-sfm-mvp/spec.md'), 'utf8');
const enforcement = readFileSync(join(root, 'docs/agents/role-enforcement.md'), 'utf8');
const envelope = readFileSync(join(root, 'docs/agents/message-envelope.md'), 'utf8');

for (const role of ['INFANTE', 'JANITORIAL', 'SUP-001', 'HR-001', 'JAN-007']) {
  check(index.includes(role), `No aparece el rol demo ${role} en index.html`);
}
const manifestText = JSON.stringify(manifest).toUpperCase();
for (const division of ['JANITORIAL', 'SECURITY', 'LANDSCAPING']) {
  check(manifestText.includes(division), `Manifiesto sin división ${division}`);
}
for (const agent of ['INFANTE', 'JANITORIAL', 'HR', 'QUALITY', 'FINANCE', 'DATA']) {
  check(catalog.toUpperCase().includes(agent), `Catálogo sin referencia a ${agent}`);
}
check(/human|humano|aprobaci[oó]n/i.test(authority), 'La matriz no declara control humano');
check(spec.includes('RF-01') && spec.includes('RF-20'), 'La especificación no cubre RF-01 a RF-20');
check(enforcement.includes('can(actor, action, resource)'), 'Falta contrato can(actor, action, resource)');
check(enforcement.includes('divisionId') && enforcement.includes('employeeId'), 'Faltan límites de aislamiento de datos');
check(envelope.includes('correlationId') && envelope.includes('requiresHumanApproval'), 'Falta sobre de mensajes gobernado');
check(envelope.includes('REQUESTED') && envelope.includes('ESCALATED'), 'Faltan estados del handoff');

for (const file of ['app.js', 'data.js']) {
  try { new Function(readFileSync(join(root, file), 'utf8')); }
  catch { failures.push(`Sintaxis inválida en ${file}`); }
}

if (failures.length) {
  console.error(`VALIDACIÓN FALLIDA (${failures.length})`);
  failures.forEach(item => console.error(`- ${item}`));
  process.exitCode = 1;
} else {
  console.log(`VALIDACIÓN OK · ${required.length} archivos · gobernanza · roles · manifiesto · sintaxis`);
}
