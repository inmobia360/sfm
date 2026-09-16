const transitions = {
  PROGRAMADA: ['EN_CURSO', 'CANCELADA'],
  EN_CURSO: ['PENDIENTE_DE_REVISION', 'BLOQUEADA', 'CANCELADA'],
  PENDIENTE_DE_REVISION: ['COMPLETADA', 'BLOQUEADA'],
  BLOQUEADA: ['EN_CURSO', 'CANCELADA'],
  COMPLETADA: [],
  CANCELADA: []
};

export function transitionTask(task, nextStatus, actor) {
  if (!task?.id || !actor?.agentId) return { ok: false, reason: 'MISSING_CONTEXT' };
  if (!transitions[task.status]?.includes(nextStatus)) return { ok: false, reason: 'INVALID_TRANSITION', from: task.status, to: nextStatus };
  const needsReview = nextStatus === 'COMPLETADA' && actor.role !== 'SUPERVISOR' && actor.role !== 'CEO';
  return { ok: true, task: { ...task, status: needsReview ? 'PENDIENTE_DE_REVISION' : nextStatus, updatedBy: actor.agentId }, audit: { action: 'TASK_STATUS_CHANGED', actor: actor.agentId, from: task.status, to: nextStatus } };
}
