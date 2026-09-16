const specialties = { INFANTE: 'Gobierno y priorización', JANITORIAL: 'Operación de servicios', 'JAN-QUALITY': 'Calidad e incidencias', 'JAN-ONBOARDING': 'Altas y onboarding', 'JAN-PAYROLL': 'Horas y exportación payroll', 'CORP-FINANCE': 'Presupuestos y control financiero' };
const seed = [
  { agentId: 'INFANTE', role: 'DIRECTOR', divisionId: 'CORP' }, { agentId: 'JANITORIAL', role: 'CEO', divisionId: 'JANITORIAL' },
  ...['JAN-ONBOARDING','JAN-QUALITY','JAN-PAYROLL','JAN-WORKFORCE','JAN-SCHEDULING','JAN-TIME','JAN-FINANCE','JAN-REPORTING','JAN-CLEANING','JAN-FLOORS','JAN-EVENTS','JAN-INCIDENTS','JAN-CONTRACTS','JAN-LEARNING','JAN-COPILOT'].map(agentId => ({ agentId, role: 'SPECIALIST', divisionId: 'JANITORIAL' })),
  ...['CORP-HR','CORP-LEARNING','CORP-QUALITY','CORP-GOVERNANCE','CORP-DATA','CORP-SECURITY','CORP-INTEGRATIONS','CORP-PROGRAM','CORP-FINANCE'].map(agentId => ({ agentId, role: 'STAFF', divisionId: 'CORP' }))
].map(agent => ({ ...agent, specialty: specialties[agent.agentId] || 'Especialidad declarada en agent-config.json', status: 'ACTIVE' }));

export function createAgentRegistry(initial = seed) {
  const agents = new Map(initial.map(agent => [agent.agentId, { ...agent }]));
  return {
    register(agent) { if (!agent?.agentId || !agent?.divisionId || !agent?.specialty) throw new Error('agentId, divisionId y specialty son obligatorios'); agents.set(agent.agentId, { ...agent, status: agent.status || 'ACTIVE' }); return agents.get(agent.agentId); },
    get(agentId) { return agents.get(agentId); },
    forDivision(divisionId) { return [...agents.values()].filter(agent => agent.divisionId === divisionId || (divisionId === 'CORP' && agent.role === 'DIRECTOR')); },
    all() { return [...agents.values()]; }
  };
}
