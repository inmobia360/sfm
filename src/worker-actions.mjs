export function evaluateClock({ action, distance = 42, radius = 100 }) {
  const entry = action === 'CLOCK_IN';
  const geofence = distance <= radius;
  return {
    action,
    status: entry && geofence ? 'PROVISIONAL' : entry ? 'REVIEW_REQUIRED' : 'PENDING_APPROVAL',
    geofence: { distance, radius, valid: geofence },
    requiresReview: !geofence || !entry
  };
}

export function completeChecklist(items) {
  const total = items.length;
  const completed = items.filter(Boolean).length;
  return { completed, total, canClose: total > 0 && completed === total, status: completed === total ? 'REVIEW' : 'INCOMPLETE' };
}

export function createWorkerIncident({ id, site, category, priority, title, actor = 'JAN-007' }) {
  if (!site || !category || !priority || !title) throw new Error('INCIDENT_FIELDS_REQUIRED');
  return { id, site, category, priority, title, actor, status: 'OPEN', requiresApproval: true };
}
