import assert from 'node:assert/strict';
import { findScheduleConflicts, hasRequiredFrequency } from '../src/scheduling-rules.mjs';

assert.deepEqual(hasRequiredFrequency({ frequency: 'Lunes a viernes' }, 5), { required: 5, completed: 5, covered: true });
assert.equal(hasRequiredFrequency({ frequency: 'Dos veces por semana' }, 1).covered, false);
const schedule = [
  { employeeId: 'JAN-007', day: 'Lunes', start: 8, end: 12 },
  { employeeId: 'JAN-007', day: 'Lunes', start: 13, end: 17 },
  { employeeId: 'JAN-007', day: 'Martes', start: 9, end: 11 },
  { employeeId: 'JAN-008', day: 'Lunes', start: 9, end: 11 }
];
assert.equal(findScheduleConflicts(schedule).length, 0);
assert.equal(findScheduleConflicts([...schedule, { employeeId: 'JAN-007', day: 'Lunes', start: 11, end: 14 }]).length, 2);
console.log('SCHEDULING RULES TEST OK · frecuencia · multicentro · conflictos');
