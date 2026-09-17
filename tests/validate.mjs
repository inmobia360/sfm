import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const required = [
  'index.html', 'launch.html', 'ceo.html', 'scenarios.html', 'worker.html', 'audit-enhance.js', 'docs/RELEASE-CHECKLIST.md', '.github/workflows/ci.yml', '.agents/README.md', '.agents/INFANTE.md', '.agents/JANITORIAL.md', '.agents/SUBAGENT-TEMPLATE.md',
  'training.html', 'report.html', 'audit.html', 'notifications.html', 'role-context.html',
  'integrations.html', 'app.js', 'data.js', 'demo-manifest.json', 'AGENTS.md', '.agents/JAN-QUALITY.md', '.agents/JAN-ONBOARDING.md', '.agents/JAN-WORKFORCE.md', '.agents/JAN-SCHEDULING.md', '.agents/JAN-TIME.md', '.agents/JAN-FINANCE.md', '.agents/JAN-REPORTING.md', '.agents/JAN-CLEANING.md', '.agents/JAN-FLOORS.md', '.agents/JAN-EVENTS.md', '.agents/JAN-INCIDENTS.md', '.agents/JAN-CONTRACTS.md', '.agents/JAN-PAYROLL.md', '.agents/JAN-LEARNING.md', '.agents/JAN-COPILOT.md', '.agents/CORP-HR.md', '.agents/CORP-FINANCE.md',
  'docs/agents/constitution.md', 'docs/agents/authority-matrix.md', 'docs/PRODUCTION-BOUNDARY.md', 'docs/PRODUCTION-API-CONTRACT.md', 'src/production-guard.mjs', 'src/request-context.mjs', 'src/request-authorization.mjs', 'src/governed-action.mjs', 'src/production-api-handler.mjs', 'src/scoped-repository.mjs', 'src/http-transport.mjs', 'tests/production-guard.test.mjs', 'tests/api-contract-doc.test.mjs', 'tests/request-context.test.mjs', 'tests/request-authorization.test.mjs', 'tests/governed-action.test.mjs', 'tests/production-api-handler.test.mjs', 'tests/scoped-repository.test.mjs', 'tests/workflow-safety.test.mjs', 'tests/demo-safety.test.mjs', 'tests/http-transport.test.mjs',
  'package.json', 'agent-config.json', 'docs/agents/shared-state.md', 'docs/agents/role-enforcement.md', 'docs/agents/message-envelope.md', 'docs/agents/runtime-guide.md', 'docs/agents/implementation-map.md', 'src/agent-envelope.mjs', 'src/agent-router.mjs', 'src/task-state.mjs', 'src/agent-runtime.mjs', 'src/agent-system.mjs', 'src/health-check.mjs', 'src/agent-config-loader.mjs', 'src/audit-log.mjs', 'src/audit-subscriber.mjs', 'src/alert-subscriber.mjs', 'src/notification-store.mjs', 'src/agent-registry.mjs', 'src/access-policy.mjs', 'src/metrics.mjs', 'src/approval-gate.mjs', 'src/event-bus.mjs', 'tests/envelope.test.mjs', 'tests/router.test.mjs', 'tests/task-state.test.mjs', 'tests/runtime.test.mjs', 'tests/agent-system.test.mjs', 'tests/health-check.test.mjs', 'tests/agent-config-loader.test.mjs', 'tests/audit-log.test.mjs', 'tests/audit-subscriber.test.mjs', 'tests/alert-subscriber.test.mjs', 'tests/notification-store.test.mjs', 'tests/agent-registry.test.mjs', 'tests/access-policy.test.mjs', 'tests/metrics.test.mjs', 'tests/approval-gate.test.mjs', 'tests/event-bus.test.mjs', 'tests/ui-contract.test.mjs', 'specs/001-sfm-mvp/spec.md'
];
const failures = [];
const check = (condition, message) => { if (!condition) failures.push(message); };
check(existsSync(join(root, '.github/workflows/pages.yml')), 'Falta workflow de GitHub Pages');
 for (const file of ['src/worker-actions.mjs', 'src/payroll-actions.mjs', 'src/division-lifecycle.mjs', 'src/scheduling-rules.mjs', 'src/quality-rules.mjs', 'src/onboarding-rules.mjs', 'src/learning-rules.mjs', 'src/data-integrity.mjs', 'src/commercial-rules.mjs', 'src/employee-lifecycle.mjs', 'src/state-store.mjs', 'src/infante-delegation.mjs', 'docs/agents/operational-rules.md', 'docs/agents/INFANTE-QUEUE.md', 'tests/requirements.test.mjs', 'tests/worker-actions.test.mjs', 'tests/payroll-actions.test.mjs', 'tests/division-lifecycle.test.mjs', 'tests/scheduling-rules.test.mjs', 'tests/quality-rules.test.mjs', 'tests/onboarding-rules.test.mjs', 'tests/learning-rules.test.mjs', 'tests/catalog-coherence.test.mjs', 'tests/data-integrity.test.mjs', 'tests/commercial-rules.test.mjs', 'tests/employee-lifecycle.test.mjs', 'tests/state-store.test.mjs', 'tests/infante-delegation.test.mjs', 'tests/infante-queue.test.mjs', 'tests/shared-adapter-coherence.test.mjs']) check(existsSync(join(root, file)), `Falta artefacto de reglas o trazabilidad: ${file}`);

for (const file of required) check(existsSync(join(root, file)), `Falta archivo requerido: ${file}`);
check(existsSync(join(root, 'agent-roster.html')), 'Falta vista de roster de agentes');
for (const file of ['.agents/CORP-GOVERNANCE.md', '.agents/CORP-DATA.md', '.agents/CORP-SECURITY.md', '.agents/CORP-INTEGRATIONS.md', '.agents/CORP-PROGRAM.md', '.agents/CORP-LEARNING.md', '.agents/CORP-QUALITY.md']) check(existsSync(join(root, file)), `Falta persona corporativa: ${file}`);
for (const file of ['.agents/DEV-PRODUCT-SDD.md', '.agents/DEV-ARCHITECTURE.md', '.agents/DEV-UX.md', '.agents/DEV-FRONTEND.md', '.agents/DEV-DATA.md', '.agents/DEV-AI-RULES.md', '.agents/DEV-QUALITY-TEST.md', '.agents/DEV-SECURITY.md', '.agents/DEV-DOCS.md']) check(existsSync(join(root, file)), `Falta persona de desarrollo: ${file}`);
const index = readFileSync(join(root, 'index.html'), 'utf8');
const manifest = JSON.parse(readFileSync(join(root, 'demo-manifest.json'), 'utf8'));
const config = JSON.parse(readFileSync(join(root, 'agent-config.json'), 'utf8'));
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
check(config.director === 'INFANTE' && config.activeDivisions.includes('JANITORIAL'), 'Configuración sin director o división activa');
check(config.governance.humanApprovalRequired === true, 'Configuración sin aprobación humana obligatoria');
check(manifest.views.includes('agent-roster.html'), 'Manifiesto sin vista de roster');
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
