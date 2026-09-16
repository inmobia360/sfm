export function proposeLearningUpdate({ courseId, source, changes, risk }) {
  if (!courseId || !source || !changes || !risk) throw new Error('LEARNING_PROPOSAL_FIELDS_REQUIRED');
  return { courseId, source, changes, risk, status: 'PENDING_HUMAN_REVIEW', published: false };
}

export function decideLearningUpdate(proposal, decision, reviewer = 'CORP-LEARNING') {
  if (proposal?.status !== 'PENDING_HUMAN_REVIEW') throw new Error('LEARNING_NOT_PENDING');
  if (!['APPROVE', 'REJECT'].includes(decision)) throw new Error('LEARNING_DECISION_INVALID');
  return { ...proposal, status: decision === 'APPROVE' ? 'PUBLISHED' : 'REJECTED', published: decision === 'APPROVE', reviewedBy: reviewer };
}
