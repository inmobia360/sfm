import assert from 'node:assert/strict';
import fs from 'node:fs';

const text = fs.readFileSync(new URL('../docs/agents/INFANTE-QUEUE.md', import.meta.url), 'utf8');
const rows = text.split('\n').filter(line => line.startsWith('| MSG-'));
assert.equal(rows.length, 3);
const ids = rows.map(row => row.split('|')[1].trim());
assert.equal(new Set(ids).size, ids.length);
for (const row of rows) {
  const fields = row.split('|').map(value => value.trim());
  assert.match(fields[1], /^MSG-/); assert.match(fields[2], /^FLOW-/); assert.ok(fields[3] && fields[4] && fields[5] && fields[6] && fields[7]);
}
console.log('INFANTE QUEUE TEST OK · delegaciones · IDs · criterios de aceptación');
