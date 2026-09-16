# SFM Operations Intelligence — Sistema de agentes

## Propósito

Esta carpeta define la organización de agentes que construirá y, posteriormente, podrá representar la operación de SFM Operations Intelligence.

La arquitectura separa dos planos:

1. **Agentes de desarrollo**: trabajan sobre especificaciones, código, datos sintéticos, pruebas y documentación.
2. **Agentes funcionales**: representan responsabilidades de negocio dentro de la demo y de la futura plataforma.

La regla de diseño es: **un núcleo común de gobierno y trazabilidad, con divisiones y agentes especializados aislados por dominio**.

## Documentos

- `constitution.md`: principios no negociables.
- `org-chart.md`: jerarquía y capas.
- `agent-catalog.md`: catálogo completo de agentes.
- `authority-matrix.md`: autoridad, datos y aprobaciones.
- `operating-protocol.md`: ciclo de tareas, handoff, eventos y escalado.
- `mvp-roadmap.md`: orden recomendado para construir el MVP.

## Referencias de diseño

- El flujo SDD de Hello SDD: constitución, especificación, clarificación, plan, tareas, implementación y validación.
- ServiceNow Field Service Management: separación entre órdenes de trabajo, tareas, recursos, habilidades, ubicaciones y despacho.
- Microsoft Copilot Studio: agentes principales, agentes conectados, handoffs explícitos, contexto limitado y gobierno.

Estas referencias sirven como patrones conceptuales; no implican adoptar esas plataformas.
