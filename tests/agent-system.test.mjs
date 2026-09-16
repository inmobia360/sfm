import assert from 'node:assert/strict';
import { createAgentSystem } from '../src/agent-system.mjs';

const system = createAgentSystem();
const message = { messageId: 'MSG-10', correlationId: 'FLOW-10', createdAt: '2026-09-16T12:00:00Z', from: { agentId: 'INFANTE' }, to: { agentId: 'JAN-QUALITY' }, intent: 'VALIDATE_CHECKLIST', priority: 'NORMAL', scope: { divisionId: 'JANITORIAL', siteIds: ['C-001'] }, payload: { taskId: 'T-1042' }, requiresHumanApproval: false, status: 'REQUESTED' };
const result = system.dispatch(message, { task: { id: 'T-1042', status: 'EN_CURSO' }, nextStatus: 'PENDIENTE_DE_REVISION', actor: { agentId: 'JAN-QUALITY', role: 'SPECIALIST', divisionId: 'JANITORIAL' } });
assert.equal(result.status, 'COMPLETED'); assert.equal(system.auditLog.query({ correlationId: 'FLOW-10' }).length, 1); assert.equal(system.alerts.length, 0);
const blocked = system.dispatch({ ...message, intent: 'REQUEST_BUDGET', to: { agentId: 'CORP-FINANCE' }, scope: { divisionId: 'CORP' } });
assert.equal(blocked.status, 'WAITING_APPROVAL'); assert.equal(system.alerts.length, 1); assert.equal(system.alerts[0].owner, 'INFANTE');
console.log('AGENT SYSTEM TEST OK · composición · auditoría · alertas');
