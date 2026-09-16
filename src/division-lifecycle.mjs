export function activateDivision(config, divisionId, approver = 'INFANTE') {
  if (approver !== config.director) throw new Error('DIRECTOR_APPROVAL_REQUIRED');
  if (!config.preparedDivisions?.includes(divisionId)) throw new Error('DIVISION_NOT_PREPARED');
  if (config.activeDivisions.includes(divisionId)) throw new Error('DIVISION_ALREADY_ACTIVE');
  return {
    ...config,
    activeDivisions: [...config.activeDivisions, divisionId],
    preparedDivisions: config.preparedDivisions.filter(id => id !== divisionId),
    divisionActivation: { divisionId, approvedBy: approver, status: 'APPROVED' }
  };
}
