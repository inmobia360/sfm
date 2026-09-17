import assert from 'node:assert/strict';
import fs from 'node:fs';

const text = fs.readFileSync(new URL('../docs/PRODUCTION-DECISION-GATE.md', import.meta.url), 'utf8');
for (const decision of ['Identidad y sesiones', 'Persistencia', 'Cola y reintentos', 'Despliegue', 'Cumplimiento']) {
  assert.match(text, new RegExp(`\\| ${decision} \\|`));
}
const pendingRows = text.split('\n').filter(line => line.startsWith('|') && line.endsWith('|')).filter(line => line.includes('| Pendiente |'));
assert.equal(pendingRows.length, 5);
for (const field of ['responsable', 'alternativa descartada', 'motivo', 'evidencia']) assert.match(text.toLowerCase(), new RegExp(field));
console.log('PRODUCTION DECISION GATE TEST OK · decisiones · estado pendiente · evidencia');
