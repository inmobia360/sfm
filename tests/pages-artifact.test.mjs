import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { preparePages } from '../scripts/prepare-pages.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
preparePages({ root });
const files = fs.readdirSync(path.join(root, 'dist'), { recursive: true }).map(file => String(file).replaceAll('\\\\', '/')).sort();
assert.ok(files.includes('launch.html'));
assert.ok(files.includes('src/worker-actions.mjs'));
assert.ok(!files.some(file => file.startsWith('docs/') || file.startsWith('tests/') || file.startsWith('.git/')));
console.log('PAGES ARTIFACT TEST OK · allowlist · sin docs · sin tests · sin git');
