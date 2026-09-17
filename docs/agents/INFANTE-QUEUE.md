# Cola de delegaciones de INFANTE

Cola activa del MVP. Cada entrada sigue el sobre de mensajes y requiere revisión del director antes de cambiar de estado.

| messageId | correlationId | intent | priority | scope | destino | criterio de aceptación |
|---|---|---|---|---|---|---|
| MSG-T10-001 | FLOW-T10-STATE | SHARE_VIEW_MUTATIONS | HIGH | `JANITORIAL`; vistas worker, operaciones, calidad y payroll | `DEV-ARCHITECTURE` + `DEV-FRONTEND` | Las mutaciones permitidas se leen desde un adaptador común y aparecen en auditoría sin duplicar handlers |
| MSG-T12-001 | FLOW-T12-BROWSER | VALIDATE_DEMO_JOURNEY | NORMAL | Datos sintéticos; desktop/tablet/mobile | `DEV-QUALITY-TEST` | Recorrido RF-01..RF-20 documentado con evidencias y sin errores críticos |
| MSG-PROD-001 | FLOW-PROD-BOUNDARY | PREPARE_PRODUCTION_BOUNDARY | NORMAL | No activar producción; sin datos reales | `DEV-SECURITY` + `CORP-GOVERNANCE` | Checklist de backend, autenticación, aislamiento, RGPD/AI Act y aprobaciones humanas revisado |
| MSG-API-001 | FLOW-PROD-API | DEFINE_API_CONTRACT | NORMAL | Contrato server-side; sin proveedor ni datos reales | `DEV-ARCHITECTURE` + `DEV-DATA` + `DEV-SECURITY` | Base implementada y probada: contexto tenant/división, autorización, auditoría, idempotencia, dashboard, audit events y aprobaciones; pendiente elegir proveedor |
| MSG-STORE-001 | FLOW-PROD-STORE | REPLACE_SCOPED_REPOSITORY | NORMAL | Sustituir adaptador en memoria; conservar tenant/división/centro | `DEV-DATA` + `DEV-SECURITY` | Base en memoria con commit/rollback síncrono y asíncrono; pendiente persistencia real, concurrencia, migraciones y rollback del proveedor |

## Entregas comprobadas

- `MSG-T10-001` cerrado: las mutaciones comparten `data.js` y quedan reflejadas en auditoría; evidencia en `tests/shared-adapter-coherence.test.mjs` y commit `d1313ca`/`d49cb15`.
- `MSG-T12-001` cerrado: las 10 vistas y el flujo worker pasaron `tests/browser-t12.py` en escritorio, tablet y móvil; evidencia en `specs/001-sfm-mvp/validation-matrix.md` y commit `0b035e1`.

## Estado

- `INFANTE` conserva la prioridad y el criterio de aceptación.
- `JANITORIAL` puede ejecutar el ámbito operativo, pero no aprobar compromisos corporativos.
- Las delegaciones sensibles no se consideran completadas hasta registrar aprobación humana en audit log.
- Ninguna entrada autoriza por sí sola despliegue, publicación, acceso a datos reales o activación de una división futura.

Las entradas `MSG-PROD-001`, `MSG-API-001` y `MSG-STORE-001` permanecen abiertas hasta cerrar las decisiones de producción y aportar evidencia de proveedor, identidad, persistencia y cumplimiento.
