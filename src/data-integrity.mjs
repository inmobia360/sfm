export function validateOperationalData({ employees = [], sites = [], tasks = [], incidents = [] } = {}) {
  const unique = values => new Set(values).size === values.length;
  if (!unique(employees.map(item => item.id))) throw new Error('EMPLOYEE_ID_DUPLICATE');
  if (!unique(sites.map(item => item.id))) throw new Error('SITE_ID_DUPLICATE');
  const employeeIds = new Set(employees.map(item => item.id)); const siteIds = new Set(sites.map(item => item.id));
  if (tasks.some(item => !employeeIds.has(item.employee) || !siteIds.has(item.site))) throw new Error('TASK_REFERENCE_INVALID');
  if (incidents.some(item => !siteIds.has(item.site))) throw new Error('INCIDENT_SITE_INVALID');
  return { employees: employees.length, sites: sites.length, tasks: tasks.length, incidents: incidents.length, valid: true };
}
