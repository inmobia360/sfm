export function activateEmployee(employee, onboarding) {
  if (!employee?.id) throw new Error('EMPLOYEE_ID_REQUIRED');
  if (!onboarding?.readyForOperations) throw new Error('ONBOARDING_NOT_READY');
  return { ...employee, status: 'ACTIVE', activatedBy: 'JAN-ONBOARDING' };
}

export function suspendEmployee(employee, reason, approver = 'JAN-WORKFORCE') {
  if (!employee?.id || !reason) throw new Error('SUSPENSION_DATA_REQUIRED');
  return { ...employee, status: 'SUSPENDED', suspensionReason: reason, suspendedBy: approver };
}
