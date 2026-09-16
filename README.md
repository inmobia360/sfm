# SFM Operations Intelligence

Demo MVP navegable de SFM Services. Esta primera entrega establece el shell ejecutivo: `INFANTE`, `JANITORIAL`, selector de roles, navegación por dominios, datos sintéticos, KPIs, alertas, centro de agentes y recorrido ejecutivo.

## Ejecutar

Abrir `index.html` en un navegador. No requiere instalación, API keys ni servicios externos.

La estructura de agentes y el roadmap están en `docs/agents/`.

## Verificación

Con Node.js instalado, ejecutar `npm test` para las pruebas del sobre de mensajes, routing y estados de tareas, y `npm run validate` para comprobar la topología completa del MVP. El servidor estático puede iniciarse con `python -m http.server 4173`.

## Vistas de demostración

- `index.html`: centro ejecutivo y navegación por dominios.
- `scenarios.html`: recorrido end-to-end para el presidente.
- `worker.html`: experiencia móvil de JAN-007.
- `audit.html`: trazabilidad de eventos y acciones simuladas.
- `integrations.html`: conectores futuros y controles de gobierno.
- `notifications.html`: alertas filtrables por rol.
- `role-context.html`: matriz interactiva de autoridad y aislamiento.
