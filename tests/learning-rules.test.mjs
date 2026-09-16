import assert from 'node:assert/strict';
import { decideLearningUpdate, proposeLearningUpdate } from '../src/learning-rules.mjs';

const proposal = proposeLearningUpdate({ courseId: 'TR-005', source: 'C-001 procedure', changes: 'EPI step', risk: 'Medium' });
assert.equal(proposal.status, 'PENDING_HUMAN_REVIEW'); assert.equal(proposal.published, false);
assert.equal(decideLearningUpdate(proposal, 'APPROVE').status, 'PUBLISHED');
assert.equal(decideLearningUpdate(proposal, 'REJECT').published, false);
assert.throws(() => proposeLearningUpdate({ courseId: 'TR-005' }), /FIELDS_REQUIRED/);
assert.throws(() => decideLearningUpdate(proposal, 'PUBLISH'), /DECISION_INVALID/);
console.log('LEARNING RULES TEST OK · fuente · riesgo · aprobación humana');
