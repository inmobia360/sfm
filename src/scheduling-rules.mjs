export function hasRequiredFrequency(service, completedOccurrences) {
  const required = service.frequency === 'Lunes a viernes' ? 5 : service.frequency === 'Dos veces por semana' ? 2 : 1;
  return { required, completed: completedOccurrences, covered: completedOccurrences >= required };
}

export function findScheduleConflicts(assignments) {
  const conflicts = [];
  for (let i = 0; i < assignments.length; i += 1) {
    for (let j = i + 1; j < assignments.length; j += 1) {
      const a = assignments[i]; const b = assignments[j];
      if (a.employeeId === b.employeeId && a.day === b.day && a.start < b.end && b.start < a.end) conflicts.push({ first: a, second: b });
    }
  }
  return conflicts;
}
