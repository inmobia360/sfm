import { readFile } from 'node:fs/promises';

export function validateAgentConfig(config) {
  if (config.director !== 'INFANTE') throw new Error('INFANTE debe ser el director');
  if (!Array.isArray(config.activeAgents) || !config.activeAgents.length) throw new Error('activeAgents no puede estar vacío');
  const ids = config.activeAgents.map(agent => agent.agentId);
  if (new Set(ids).size !== ids.length) throw new Error('agentId duplicado');
  if (config.activeAgents.some(agent => !agent.agentId || !agent.role || !agent.divisionId)) throw new Error('cada agente debe declarar identidad, rol y división');
  const director = config.activeAgents.find(agent => agent.agentId === config.director);
  if (director?.divisionId !== 'CORP' || director.role !== 'DIRECTOR') throw new Error('INFANTE debe ser DIRECTOR de CORP');
  if (!Array.isArray(config.developmentAgents) || !config.developmentAgents.length) throw new Error('developmentAgents no puede estar vacío');
  if (new Set(config.developmentAgents).size !== config.developmentAgents.length) throw new Error('developmentAgent duplicado');
  if (!config.governance?.humanApprovalRequired) throw new Error('La aprobación humana debe estar activa');
  return config;
}

export async function loadAgentConfig(path) {
  return validateAgentConfig(JSON.parse(await readFile(path, 'utf8')));
}
