import assert from 'node:assert/strict';
import fs from 'node:fs';

const text = fs.readFileSync(new URL('../docs/PRODUCTION-API-CONTRACT.md', import.meta.url), 'utf8');
for (const field of ['tenantId', 'actorId', 'role', 'divisionId', 'requestId', 'traceId']) assert.match(text, new RegExp(`\\"${field}\\"`));
for (const route of ['/v1/me', '/v1/attendance/events', '/v1/tasks/{taskId}/complete', '/v1/incidents', '/v1/approvals/{approvalId}/decision', '/v1/audit-events']) assert.match(text, new RegExp(route.replace(/[{}]/g, '\\$&')));
for (const rule of ['can(actor, action, resource)', 'approval-gate', 'messageId', 'correlationId', 'idempotencia']) assert.ok(text.toLowerCase().includes(rule.toLowerCase()), `falta regla: ${rule}`);
console.log('API CONTRACT TEST OK · contexto · endpoints · autorización · auditoría');
