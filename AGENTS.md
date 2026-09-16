# SFM Agent Operating Instructions

## Alcance

Este repositorio contiene el MVP de SFM Operations Intelligence. `INFANTE` es el director general y coordina el flujo; `JANITORIAL` es la primera división operativa. Security, Landscaping, Events y Disaster Recovery están preparados, pero no son divisiones activas del MVP.

## Reglas obligatorias

- Leer `docs/agents/constitution.md`, `docs/agents/authority-matrix.md` y `docs/agents/role-enforcement.md` antes de modificar el núcleo de agentes.
- Leer la especificación y el plan de `specs/001-sfm-mvp/` antes de implementar una capacidad del MVP.
- No usar datos laborales reales, credenciales, GPS continuo ni payroll legal en la demo.
- No ampliar el ámbito de JANITORIAL para acceder a otra división.
- Las acciones sensibles deben pasar por `can(actor, action, resource)` y el `approval-gate`.
- Cada handoff debe seguir `docs/agents/message-envelope.md` y conservar `messageId` y `correlationId`.
- Toda modificación debe añadir o actualizar pruebas y ejecutar `npm test` y `npm run validate`.
- No publicar ni desplegar cambios sin autorización explícita cuando la acción cree efectos externos.

## Flujo de trabajo

1. Especificar el cambio y su agente responsable.
2. Comprobar ámbito, autoridad, aprobación y datos afectados.
3. Implementar en capas pequeñas.
4. Probar el caso correcto y al menos un caso de aislamiento o rechazo.
5. Revisar el audit log, el estado del repositorio y el diff antes de entregar.
