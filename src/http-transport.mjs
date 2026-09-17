export async function handleHttpRequest({ request, response, contextResolver, apiHandler }) {
  if (typeof contextResolver !== 'function' || typeof apiHandler !== 'function') throw new Error('HTTP_TRANSPORT_DEPENDENCIES_REQUIRED');
  const url = new URL(request.url, 'http://localhost');
  let result;
  try {
    const body = request.method === 'POST' ? await readJson(request) : {};
    const context = await contextResolver(request);
    result = apiHandler({ method: request.method, path: url.pathname, context, ...body });
  } catch (error) {
    result = { status: 400, body: { error: error.code || 'BAD_REQUEST' } };
  }
  response.statusCode = result.status;
  response.setHeader('content-type', 'application/json; charset=utf-8');
  response.end(JSON.stringify(result.body));
  return result;
}

function readJson(request) {
  return new Promise((resolve, reject) => {
    let raw = '';
    request.on('data', chunk => { raw += chunk; if (raw.length > 100_000) reject(new Error('HTTP_BODY_TOO_LARGE')); });
    request.on('end', () => { try { resolve(raw ? JSON.parse(raw) : {}); } catch { reject(new Error('HTTP_INVALID_JSON')); } });
    request.on('error', reject);
  });
}
