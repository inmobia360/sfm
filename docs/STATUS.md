# Estado actual del MVP

## Listo para demo

- Arquitectura documental de agentes.
- Constitución, catálogo, autoridad, handoffs y routing.
- Shell ejecutivo y lanzador unificado.
- Employee 360 sintético.
- Panel móvil del trabajador.
- Checklist operativa.
- Escenarios end-to-end.
- Formación con revisión humana de IA.
- Incidencias y calidad.
- Informe de cliente con JSON/CSV.
- Payroll de horas sintéticas.
- Audit log.
- Alertas por rol.
- Integraciones simuladas.
- Dashboard corporativo de INFANTE.
- Workflow preparado para GitHub Pages.

## No debe presentarse como producción

- La selección de rol aún es principalmente de demostración.
- Algunas mutaciones todavía no sincronizan todas las vistas en tiempo real.
- No hay autenticación ni backend.
- No hay payroll legal ni seguimiento GPS continuo.
- La prueba Playwright headless está limitada por permisos del entorno Windows.
- GitHub Pages requiere habilitación manual en Settings.

## Próxima prioridad técnica

Conectar el estado central y los eventos de forma compartida entre todas las vistas, sustituir acciones simuladas por reglas reutilizables y validar RF-01 a RF-20 con una matriz ejecutable.
