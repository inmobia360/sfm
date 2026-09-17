# SFM Operations Intelligence

Demo MVP navegable de SFM Services. Esta primera entrega establece el shell ejecutivo: `INFANTE`, `JANITORIAL`, selector de roles, navegación por dominios, datos sintéticos, KPIs, alertas, centro de agentes y recorrido ejecutivo.

## Ejecutar

Abrir `index.html` en un navegador. No requiere instalación, API keys ni servicios externos.

La estructura de agentes y el roadmap están en `docs/agents/`.

La transición a backend está definida, pero no activada: consulta `docs/PRODUCTION-BOUNDARY.md` y `docs/PRODUCTION-API-CONTRACT.md`. El MVP no usa autenticación productiva ni datos reales.

El núcleo ejecutable se compone con `createAgentSystem()` desde `src/agent-system.mjs`; integra registry, routing, autorización, approval gate, bus, auditoría, alertas y dispatch. Su contrato de extensión está documentado en `docs/agents/runtime-guide.md`.

## Composición actual

`INFANTE` dirige la capa corporativa; `JANITORIAL` dirige la operación de servicios; 9 agentes `CORP-*`, 15 especialistas `JAN-*` y 9 agentes `DEV-*` completan el roster documentado en `agent-config.json` y `docs/agents/agent-catalog.md`. Las especialidades se validan antes de construir el runtime y las divisiones futuras permanecen aisladas.

Las reglas reutilizables están en `src/`: onboarding, trabajador, agenda, calidad, formación IA, payroll, ciclo de divisiones, integridad de datos y compromisos comerciales. Sus pruebas forman parte de `npm test`; `npm run validate` protege también su presencia y la coherencia del catálogo.

## Verificación

Con Node.js instalado, ejecutar `npm test` para la batería principal, `npm run test:api-contract`, `npm run test:request-context`, `npm run test:request-authorization` y `npm run test:governed-action` para las fronteras productivas, y `npm run validate` para comprobar la topología completa del MVP. El servidor estático puede iniciarse con `python -m http.server 4173`.

## Vistas de demostración

- `index.html`: centro ejecutivo y navegación por dominios.
- `scenarios.html`: recorrido end-to-end para el presidente.
- `worker.html`: experiencia móvil de JAN-007.
- `audit.html`: trazabilidad de eventos y acciones simuladas.
- `integrations.html`: conectores futuros y controles de gobierno.
- `notifications.html`: alertas filtrables por rol.
- `role-context.html`: matriz interactiva de autoridad y aislamiento.
