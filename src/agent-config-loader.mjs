import { readFile } from 'node:fs/promises';

export async function loadAgentConfig(path) {
  const config = JSON.parse(await readFile(path, 'utf8'));
  if (config.director !== 'INFANTE') throw new Error('INFANTE debe ser el director');
  if (!Array.isArray(config.activeAgents) || !config.activeAgents.length) throw new Error('activeAgents no puede estar vacío');
  const ids = config.activeAgents.map(agent => agent.agentId);
  if (new Set(ids).size !== ids.length) throw new Error('agentId duplicado');
  if (!config.governance?.humanApprovalRequired) throw new Error('La aprobación humana debe estar activa');
  return config;
}
