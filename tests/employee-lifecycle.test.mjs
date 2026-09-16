import assert from 'node:assert/strict';
import { activateEmployee, suspendEmployee } from '../src/employee-lifecycle.mjs';

assert.equal(activateEmployee({ id: 'JAN-011', status: 'ONBOARDING' }, { readyForOperations: true }).status, 'ACTIVE');
assert.throws(() => activateEmployee({ id: 'JAN-011' }, { readyForOperations: false }), /ONBOARDING_NOT_READY/);
assert.equal(suspendEmployee({ id: 'JAN-011', status: 'ACTIVE' }, 'Documentación pendiente').status, 'SUSPENDED');
assert.throws(() => suspendEmployee({ id: 'JAN-011' }, ''), /SUSPENSION_DATA_REQUIRED/);
console.log('EMPLOYEE LIFECYCLE TEST OK · onboarding · activación · suspensión');
