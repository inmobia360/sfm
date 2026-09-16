import assert from 'node:assert/strict';
import { summarizeOperations } from '../src/metrics.mjs';

const data = { tasks: [{ status: 'COMPLETADA', divisionId: 'JANITORIAL' }, { status: 'EN_CURSO', divisionId: 'JANITORIAL' }, { status: 'COMPLETADA', divisionId: 'SECURITY' }], incidents: [{ status: 'Abierta', divisionId: 'JANITORIAL' }, { status: 'CERRADA', divisionId: 'SECURITY' }], employees: [{ status: 'Activo', divisionId: 'JANITORIAL' }, { status: 'Inactivo', divisionId: 'JANITORIAL' }] };
assert.deepEqual(summarizeOperations(data, 'ignored'), { divisionId: 'ALL', tasks: 3, completedTasks: 2, completionRate: 67, openIncidents: 1, activeEmployees: 1 });
assert.deepEqual(summarizeOperations({ ...data, divisionId: 'JANITORIAL' }), { divisionId: 'JANITORIAL', tasks: 2, completedTasks: 1, completionRate: 50, openIncidents: 1, activeEmployees: 1 });
console.log('METRICS TEST OK · agregado · división · privacidad');
