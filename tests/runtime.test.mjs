import assert from 'node:assert/strict';
import { dispatch } from '../src/agent-runtime.mjs';

const message = { messageId: 'MSG-3', correlationId: 'FLOW-3', createdAt: '2026-09-16T12:00:00Z', from: { agentId: 'INFANTE' }, to: { agentId: 'JAN-QUALITY' }, intent: 'VALIDATE_CHECKLIST', priority: 'NORMAL', scope: { divisionId: 'JANITORIAL', siteIds: ['C-001'] }, payload: { taskId: 'T-1042' }, requiresHumanApproval: false, status: 'REQUESTED' };
const result = dispatch(message, { task: { id: 'T-1042', status: 'EN_CURSO' }, nextStatus: 'PENDIENTE_DE_REVISION', actor: { agentId: 'JAN-QUALITY', role: 'SPECIALIST' } });
assert.equal(result.status, 'COMPLETED');
assert.equal(result.task.status, 'PENDIENTE_DE_REVISION');
assert.equal(result.audit.correlationId, 'FLOW-3');
assert.equal(dispatch({ ...message, intent: 'UNKNOWN_INTENT' }).status, 'ESCALATED');
console.log('RUNTIME TEST OK · handoff · tarea · auditoría');
