import { createAgentRegistry } from './agent-registry.mjs';
import { createEventBus } from './event-bus.mjs';
import { createAuditLog } from './audit-log.mjs';
import { connectAuditSubscriber } from './audit-subscriber.mjs';
import { connectAlertSubscriber } from './alert-subscriber.mjs';
import { dispatch } from './agent-runtime.mjs';
import { validateAgentConfig } from './agent-config-loader.mjs';

export function createAgentSystem({ agents, config, alerts = [], notificationStore } = {}) {
  const declared = config ? validateAgentConfig(config).activeAgents : agents;
  const registry = createAgentRegistry(declared); const bus = createEventBus(); const auditLog = createAuditLog();
  connectAuditSubscriber(bus, auditLog); connectAlertSubscriber(bus, alert => { alerts.push(alert); notificationStore?.add(alert); });
  return { registry, bus, auditLog, alerts, dispatch: (message, context = {}) => dispatch(message, { ...context, bus }) };
}
