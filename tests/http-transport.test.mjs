import assert from 'node:assert/strict';
import { EventEmitter } from 'node:events';
import { handleHttpRequest } from '../src/http-transport.mjs';

const context = { tenantId: 'TENANT-001', actorId: 'JANITORIAL', role: 'CEO', divisionId: 'JANITORIAL', siteIds: ['C-001'], requestId: 'REQ-1', traceId: 'TRACE-1' };
const request = new EventEmitter(); request.method = 'GET'; request.url = '/v1/me';
const response = { headers: {}, setHeader(key, value) { this.headers[key] = value; }, end(value) { this.body = value; } };
const result = await handleHttpRequest({ request, response, contextResolver: async () => context, apiHandler: input => ({ status: 200, body: { path: input.path, actor: input.context.actorId } }) });
assert.equal(result.status, 200); assert.equal(JSON.parse(response.body).actor, 'JANITORIAL'); assert.equal(response.headers['content-type'], 'application/json; charset=utf-8');
await assert.rejects(() => handleHttpRequest({ request, response, apiHandler: () => ({ status: 200, body: {} }) }), /DEPENDENCIES_REQUIRED/);
console.log('HTTP TRANSPORT TEST OK · resolver explícito · JSON · delegación segura');
