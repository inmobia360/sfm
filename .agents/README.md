# Agentes ejecutables de SFM

Estos archivos son definiciones de comportamiento para implementar los agentes sobre el runtime del proyecto. No conceden permisos por sí mismos: toda acción debe pasar por `access-policy`, `approval-gate` y el contexto de división.

- [INFANTE.md](INFANTE.md): director general y orquestador.
- [JANITORIAL.md](JANITORIAL.md): CEO de la división operativa.
- [SUBAGENT-TEMPLATE.md](SUBAGENT-TEMPLATE.md): plantilla para agentes especialistas.

El formato de handoff está en `docs/agents/message-envelope.md` y el flujo técnico en `docs/agents/runtime-guide.md`.
