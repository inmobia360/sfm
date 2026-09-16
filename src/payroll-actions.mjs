export function reviewHours(entry, reviewer = 'SUP-001') {
  if (!entry?.employeeId || !Number.isFinite(entry.hours) || entry.hours < 0) throw new Error('HOURS_ENTRY_INVALID');
  if (!reviewer) throw new Error('REVIEWER_REQUIRED');
  return { ...entry, status: 'REVIEWED', reviewedBy: reviewer };
}

export function approveHours(entry, approver = 'CORP-FINANCE') {
  if (entry?.status !== 'REVIEWED') throw new Error('HOURS_MUST_BE_REVIEWED');
  return { ...entry, status: 'APPROVED', approvedBy: approver };
}

export function exportApprovedHours(entries) {
  if (!Array.isArray(entries) || entries.some(entry => entry.status !== 'APPROVED')) throw new Error('UNAPPROVED_HOURS_CANNOT_EXPORT');
  return entries.map(({ employeeId, hours, approvedBy }) => ({ employeeId, hours, approvedBy }));
}
