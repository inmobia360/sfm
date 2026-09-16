import assert from 'node:assert/strict';
import { can } from '../src/access-policy.mjs';

assert.equal(can({ agentId: 'INFANTE', role: 'DIRECTOR' }, 'ASSIGN_TASK', { divisionId: 'SECURITY' }), 'ALLOW');
assert.equal(can({ agentId: 'JANITORIAL', role: 'CEO', divisionId: 'JANITORIAL' }, 'VIEW_DIVISION', { divisionId: 'JANITORIAL' }), 'ALLOW');
assert.equal(can({ agentId: 'JANITORIAL', role: 'CEO', divisionId: 'JANITORIAL' }, 'MANAGE_BUDGET', { divisionId: 'JANITORIAL' }), 'ESCALATE');
assert.equal(can({ agentId: 'JAN-007', role: 'WORKER', divisionId: 'JANITORIAL', employeeId: 'JAN-007' }, 'VIEW_OWN_TASK', { divisionId: 'JANITORIAL', employeeId: 'JAN-007' }), 'ALLOW');
assert.equal(can({ agentId: 'JAN-007', role: 'WORKER', divisionId: 'JANITORIAL', employeeId: 'JAN-007' }, 'VIEW_OWN_TASK', { divisionId: 'JANITORIAL', employeeId: 'JAN-001' }), 'DENY');
assert.equal(can({ agentId: 'JANITORIAL', role: 'CEO', divisionId: 'JANITORIAL' }, 'VIEW_DIVISION', { divisionId: 'SECURITY' }), 'DENY');
console.log('ACCESS POLICY TEST OK · allow · deny · escalate · aislamiento');
