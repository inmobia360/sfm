import assert from 'node:assert/strict';
import { registerRoute, routeEnvelope } from '../src/agent-router.mjs';

const message = { messageId: 'MSG-2', correlationId: 'FLOW-2', createdAt: '2026-09-16T12:00:00Z', from: { agentId: 'INFANTE' }, to: { agentId: 'JAN-QUALITY' }, intent: 'VALIDATE_CHECKLIST', priority: 'NORMAL', scope: { divisionId: 'JANITORIAL', siteIds: ['C-001'] }, payload: { taskId: 'T-1042' }, requiresHumanApproval: false, status: 'REQUESTED' };
assert.equal(routeEnvelope(message).status, 'ACCEPTED');
assert.equal(routeEnvelope({ ...message, to: { agentId: 'JAN-PAYROLL' } }).status, 'REJECTED');
assert.equal(routeEnvelope({ ...message, intent: 'REQUEST_BUDGET', to: { agentId: 'CORP-FINANCE' }, scope: { divisionId: 'CORP' } }).status, 'WAITING_APPROVAL');
assert.equal(routeEnvelope({ ...message, intent: 'UNKNOWN_INTENT' }).status, 'ESCALATED');
registerRoute('SECURITY_PATROL', 'SEC-OPERATIONS', 'SECURITY');
assert.equal(routeEnvelope({ ...message, intent: 'SECURITY_PATROL', to: { agentId: 'SEC-OPERATIONS' }, scope: { divisionId: 'SECURITY', siteIds: ['S-001'] } }).status, 'ACCEPTED');
assert.equal(routeEnvelope({ ...message, scope: { divisionId: 'SECURITY', siteIds: ['S-001'] } }).status, 'ESCALATED');
console.log('ROUTER TEST OK · destino · rechazo · aprobación · escalado');
