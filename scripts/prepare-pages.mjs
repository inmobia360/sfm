import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const publicFiles = ['launch.html', 'index.html', 'ceo.html', 'scenarios.html', 'worker.html', 'training.html', 'report.html', 'audit.html', 'notifications.html', 'integrations.html', 'styles.css', 'data.js', 'agent-config.json', 'sfm-logo.png'];

export function preparePages({ root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..') } = {}) {
  const output = path.join(root, 'dist');
  const modules = fs.readdirSync(path.join(root, 'src')).filter(name => name.endsWith('.mjs')).map(name => path.join('src', name));
  fs.rmSync(output, { recursive: true, force: true });
  for (const relative of [...publicFiles, ...modules]) {
    const source = path.join(root, relative);
    const target = path.join(output, relative);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.copyFileSync(source, target);
  }
  return { output, count: publicFiles.length + modules.length };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const { count } = preparePages();
  console.log(`PAGES ARTIFACT OK · ${count} archivos públicos permitidos`);
}
