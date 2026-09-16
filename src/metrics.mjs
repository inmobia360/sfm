export function summarizeOperations({ tasks = [], incidents = [], employees = [], divisionId } = {}) {
  const scoped = items => divisionId ? items.filter(item => !item.divisionId || item.divisionId === divisionId) : items;
  const taskList = scoped(tasks), incidentList = scoped(incidents), employeeList = scoped(employees);
  const completed = taskList.filter(task => task.status === 'COMPLETADA').length;
  return { divisionId: divisionId || 'ALL', tasks: taskList.length, completedTasks: completed, completionRate: taskList.length ? Math.round(completed / taskList.length * 100) : 0, openIncidents: incidentList.filter(item => item.status !== 'CERRADA').length, activeEmployees: employeeList.filter(item => item.status === 'Activo').length };
}
