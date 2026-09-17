import assert from 'node:assert/strict';
import fs from 'node:fs';

const ci = fs.readFileSync(new URL('../.github/workflows/ci.yml', import.meta.url), 'utf8');
const pages = fs.readFileSync(new URL('../.github/workflows/pages.yml', import.meta.url), 'utf8');
assert.match(ci, /permissions:\s*\n\s+contents:\s+read/);
assert.match(ci, /npm run test:all/);
assert.match(ci, /npm run validate/);
assert.match(pages, /branches:\s*\[main\]/);
assert.match(pages, /pages:\s+write/);
assert.match(pages, /id-token:\s+write/);
assert.match(pages, /actions\/deploy-pages@v4/);
assert.doesNotMatch(ci, /secrets\./i);
console.log('WORKFLOW SAFETY TEST OK · CI · Pages · permissions · scope');
