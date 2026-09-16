import assert from 'node:assert/strict';
import { validateOperationalData } from '../src/data-integrity.mjs';

const data = { employees: [{ id: 'JAN-001' }], sites: [{ id: 'C-001' }], tasks: [{ employee: 'JAN-001', site: 'C-001' }], incidents: [{ site: 'C-001' }] };
assert.equal(validateOperationalData(data).valid, true);
assert.throws(() => validateOperationalData({ ...data, employees: [{ id: 'JAN-001' }, { id: 'JAN-001' }] }), /EMPLOYEE_ID_DUPLICATE/);
assert.throws(() => validateOperationalData({ ...data, tasks: [{ employee: 'JAN-999', site: 'C-001' }] }), /TASK_REFERENCE_INVALID/);
assert.throws(() => validateOperationalData({ ...data, incidents: [{ site: 'C-999' }] }), /INCIDENT_SITE_INVALID/);
console.log('DATA INTEGRITY TEST OK · IDs · referencias · entidades huérfanas');
