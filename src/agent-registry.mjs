const seed = [
  { agentId: 'INFANTE', role: 'DIRECTOR', divisionId: 'CORP', specialty: 'Gobierno y priorización', status: 'ACTIVE' },
  { agentId: 'JANITORIAL', role: 'CEO', divisionId: 'JANITORIAL', specialty: 'Operación de servicios', status: 'ACTIVE' },
  { agentId: 'JAN-ONBOARDING', role: 'SPECIALIST', divisionId: 'JANITORIAL', specialty: 'Altas y onboarding', status: 'ACTIVE' },
  { agentId: 'JAN-QUALITY', role: 'SPECIALIST', divisionId: 'JANITORIAL', specialty: 'Calidad e incidencias', status: 'ACTIVE' },
  { agentId: 'JAN-PAYROLL', role: 'SPECIALIST', divisionId: 'JANITORIAL', specialty: 'Horas y exportación payroll', status: 'ACTIVE' },
  { agentId: 'CORP-FINANCE', role: 'STAFF', divisionId: 'CORP', specialty: 'Presupuestos y control financiero', status: 'ACTIVE' }
];

export function createAgentRegistry(initial = seed) {
  const agents = new Map(initial.map(agent => [agent.agentId, { ...agent }]));
  return {
    register(agent) { if (!agent?.agentId || !agent?.divisionId || !agent?.specialty) throw new Error('agentId, divisionId y specialty son obligatorios'); agents.set(agent.agentId, { ...agent, status: agent.status || 'ACTIVE' }); return agents.get(agent.agentId); },
    get(agentId) { return agents.get(agentId); },
    forDivision(divisionId) { return [...agents.values()].filter(agent => agent.divisionId === divisionId || (divisionId === 'CORP' && agent.role === 'DIRECTOR')); },
    all() { return [...agents.values()]; }
  };
}
