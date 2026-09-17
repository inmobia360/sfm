import { createReadStream, existsSync, statSync } from 'node:fs';
import { join, normalize, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'node:http';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml' };

export function createDemoServer({ host = '127.0.0.1', port = 4173 } = {}) {
  const server = createServer((request, response) => {
    if (!['GET', 'HEAD'].includes(request.method)) { response.writeHead(405, { allow: 'GET, HEAD' }); response.end(); return; }
    let pathname;
    try { pathname = decodeURIComponent(new URL(request.url, `http://${host}`).pathname); } catch { response.writeHead(400); response.end(); return; }
    const requestedPath = pathname === '/' ? '/launch.html' : pathname;
    const segments = requestedPath.split('/').filter(Boolean);
    const extension = requestedPath.slice(requestedPath.lastIndexOf('.'));
    const publicRootFile = segments.length === 1 && Boolean(types[extension]);
    const publicModule = segments.length === 2 && segments[0] === 'src' && extension === '.mjs';
    if (!publicRootFile && !publicModule) { response.writeHead(404); response.end('Not found'); return; }
    const candidate = resolve(root, `.${normalize(requestedPath)}`);
    if (relative(root, candidate).startsWith('..') || !existsSync(candidate) || !statSync(candidate).isFile()) { response.writeHead(404); response.end('Not found'); return; }
    response.writeHead(200, { 'content-type': types[candidate.slice(candidate.lastIndexOf('.'))] || 'application/octet-stream', 'cache-control': 'no-store' });
    if (request.method === 'HEAD') { response.end(); return; }
    createReadStream(candidate).pipe(response);
  });
  return {
    server,
    listen: () => new Promise(resolveListen => server.listen(port, host, () => resolveListen(server))),
    close: () => new Promise(resolveClose => server.close(resolveClose))
  };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const demo = createDemoServer();
  demo.listen().then(() => console.log('SFM DEMO SERVER · http://127.0.0.1:4173'));
}
