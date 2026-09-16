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
- Estado compartido entre vistas mediante `localStorage` y `BroadcastChannel`.
- Runtime enlazado con `agent-config.json` y validación de topología por capas.
- Matriz ejecutable de trazabilidad `RF-01` a `RF-20`.
- Reglas operativas testeadas para fichaje, checklist e incidencias.
- Reglas testeadas para onboarding, Employee 360, agenda, calidad, formación IA, payroll y compromisos comerciales.
- Escenarios, auditoría, alertas, informe y formación conectados al estado común de la demo.

## No debe presentarse como producción

- La selección de rol aún es principalmente de demostración.
- Algunas mutaciones todavía no sincronizan todas las vistas en tiempo real.
- No hay autenticación ni backend.
- No hay payroll legal ni seguimiento GPS continuo.
- La prueba Playwright headless está limitada por permisos del entorno Windows.
- GitHub Pages requiere habilitación manual en Settings.

## Próxima prioridad técnica

1. Migrar las vistas restantes a un adaptador común de estado y eliminar handlers simulados duplicados.
2. Persistir el estado en un backend con autenticación, autorización por división y control de concurrencia.
3. Completar la aprobación real de horas antes de exportar payroll y añadir pruebas de recorrido en navegador.
4. Activar `SECURITY`, `LANDSCAPING` y otras divisiones únicamente mediante una migración de configuración revisada por `INFANTE`.
