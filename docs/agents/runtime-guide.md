# Guía del runtime de agentes

El runtime mínimo se encuentra en `src/agent-runtime.mjs` y expone `dispatch(message, context)`. Su responsabilidad termina en enrutar y gobernar el handoff; no inventa datos, no llama servicios externos y no confirma acciones sensibles.

## Flujo

1. `validateEnvelope` comprueba identidad, correlación, ámbito, intención y estado.
2. `routeEnvelope` resuelve el especialista registrado y rechaza destinos incorrectos.
3. Las intenciones sensibles quedan en `WAITING_APPROVAL`.
4. Las intenciones operativas pueden ejecutar una transición explícita de tarea.
5. El resultado incluye un evento `AGENT_HANDOFF` con correlación y trazabilidad.

## Ampliar el sistema

Para incorporar `SECURITY` o `LANDSCAPING`, registrar primero la intención y el agente en `src/agent-router.mjs`, definir su ámbito en `docs/agents/role-enforcement.md` y añadir una prueba negativa de aislamiento. No se debe ampliar el alcance de JANITORIAL para reutilizar datos de otra división.

## Inicialización declarativa

1. Cargar `agent-config.json` con `loadAgentConfig()` o validar un objeto con `validateAgentConfig()`.
2. Crear `createAgentSystem({ config })`; el runtime construirá el registro desde `activeAgents` ya validados.
3. Mantener `governance.humanApprovalRequired` activo y conectar el bus, audit log y alertas.
4. Invocar las reglas de `docs/agents/operational-rules.md` antes de cambiar estados de negocio.

La demo usa `localStorage` y `BroadcastChannel` únicamente como transporte local. Para producción deben sustituirse por persistencia server-side, autenticación, autorización por división, control de concurrencia, secretos gestionados y observabilidad.
