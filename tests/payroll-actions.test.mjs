import assert from 'node:assert/strict';
import { approveHours, exportApprovedHours, reviewHours } from '../src/payroll-actions.mjs';

const raw = { employeeId: 'JAN-007', hours: 8 };
const reviewed = reviewHours(raw);
assert.equal(reviewed.status, 'REVIEWED');
assert.equal(approveHours(reviewed).status, 'APPROVED');
assert.deepEqual(exportApprovedHours([approveHours(reviewed)]), [{ employeeId: 'JAN-007', hours: 8, approvedBy: 'CORP-FINANCE' }]);
assert.throws(() => approveHours(raw), /MUST_BE_REVIEWED/);
assert.throws(() => exportApprovedHours([reviewed]), /UNAPPROVED/);
assert.throws(() => reviewHours({ employeeId: 'JAN-007', hours: -1 }), /HOURS_ENTRY_INVALID/);
console.log('PAYROLL ACTIONS TEST OK · revisión · aprobación · exportación segura');
