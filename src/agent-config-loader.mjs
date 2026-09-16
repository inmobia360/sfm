import { readFile } from 'node:fs/promises';

export function validateAgentConfig(config) {
  if (config.director !== 'INFANTE') throw new Error('INFANTE debe ser el director');
  if (!Array.isArray(config.activeDivisions) || !config.activeDivisions.length) throw new Error('activeDivisions no puede estar vacío');
  if (new Set(config.activeDivisions).size !== config.activeDivisions.length) throw new Error('activeDivision duplicada');
  if (new Set(config.preparedDivisions || []).size !== (config.preparedDivisions || []).length) throw new Error('preparedDivision duplicada');
  if ((config.preparedDivisions || []).some(division => config.activeDivisions.includes(division))) throw new Error('división activa y preparada simultáneamente');
  if (!Array.isArray(config.activeAgents) || !config.activeAgents.length) throw new Error('activeAgents no puede estar vacío');
  const ids = config.activeAgents.map(agent => agent.agentId);
  if (new Set(ids).size !== ids.length) throw new Error('agentId duplicado');
  if (config.activeAgents.some(agent => !agent.agentId || !agent.role || !agent.divisionId)) throw new Error('cada agente debe declarar identidad, rol y división');
  if (!config.specialties || config.activeAgents.some(agent => !config.specialties[agent.agentId])) throw new Error('cada agente debe declarar especialidad');
  const director = config.activeAgents.find(agent => agent.agentId === config.director);
  if (director?.divisionId !== 'CORP' || director.role !== 'DIRECTOR') throw new Error('INFANTE debe ser DIRECTOR de CORP');
  const activeDivisions = new Set(['CORP', ...(config.activeDivisions || [])]);
  if (config.activeAgents.some(agent => !activeDivisions.has(agent.divisionId))) throw new Error('agente de división no activa');
  if (!Array.isArray(config.developmentAgents) || !config.developmentAgents.length) throw new Error('developmentAgents no puede estar vacío');
  if (new Set(config.developmentAgents).size !== config.developmentAgents.length) throw new Error('developmentAgent duplicado');
  if (!config.governance?.humanApprovalRequired) throw new Error('La aprobación humana debe estar activa');
  return { ...config, activeAgents: config.activeAgents.map(agent => ({ ...agent, specialty: config.specialties[agent.agentId] })) };
}

export async function loadAgentConfig(path) {
  return validateAgentConfig(JSON.parse(await readFile(path, 'utf8')));
}
