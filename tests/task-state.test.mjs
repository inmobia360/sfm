import assert from 'node:assert/strict';
import { transitionTask } from '../src/task-state.mjs';

const task = { id: 'T-1042', status: 'EN_CURSO' };
const supervisor = { agentId: 'SUP-001', role: 'SUPERVISOR' };
assert.equal(transitionTask(task, 'PENDIENTE_DE_REVISION', supervisor).ok, true);
assert.equal(transitionTask(task, 'PROGRAMADA', supervisor).reason, 'INVALID_TRANSITION');
assert.equal(transitionTask({ ...task, status: 'PENDIENTE_DE_REVISION' }, 'COMPLETADA', supervisor).task.status, 'COMPLETADA');
assert.equal(transitionTask({ ...task, status: 'PENDIENTE_DE_REVISION' }, 'COMPLETADA', { agentId: 'JAN-QUALITY', role: 'SPECIALIST' }).task.status, 'PENDIENTE_DE_REVISION');
console.log('TASK STATE TEST OK · transiciones · revisión · auditoría');
