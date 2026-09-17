# Contrato mínimo de API productiva

Este documento prepara la sustitución del estado local de la demo por un backend. No habilita producción ni contiene credenciales.

## Contexto obligatorio

Cada request autenticada debe resolver antes de leer o mutar recursos:

```json
{
  "tenantId": "TENANT-001",
  "actorId": "JAN-007",
  "role": "WORKER",
  "divisionId": "JANITORIAL",
  "siteIds": ["C-001"],
  "employeeId": "JAN-007",
  "requestId": "REQ-...",
  "traceId": "TRACE-..."
}
```

El servidor debe rechazar un contexto incompleto y nunca confiar en `divisionId`, `siteIds` o `employeeId` enviados por la interfaz sin resolverlos desde la identidad y sus asignaciones.

La validación base está preparada en `src/request-context.mjs` y exige los campos obligatorios, un rol reconocido, alcance de centros y el aislamiento del trabajador sobre su propio `employeeId`. `src/request-authorization.mjs` compone esa validación con `can(...)` y devuelve `DENY`, `ALLOW` o `ESCALATE` antes de ejecutar una acción. `src/governed-action.mjs` convierte la escalada en `PENDING_APPROVAL` y solo devuelve `READY` después de una decisión humana válida. `src/production-api-handler.mjs` ofrece un handler agnóstico de transporte para probar este contrato con respuestas, idempotencia y audit event; no es todavía un servidor productivo.

## Endpoints iniciales

| Método | Ruta | Alcance | Aprobación |
|---|---|---|---|
| GET | `/v1/me` | identidad y permisos efectivos | no |
| GET | `/v1/divisions/{divisionId}/dashboard` | agregado de la división autorizada | no |
| POST | `/v1/attendance/events` | fichaje puntual y geofence no continuo | anomalía: supervisor |
| POST | `/v1/tasks/{taskId}/complete` | tarea del empleado/centro autorizado | revisión supervisor |
| POST | `/v1/incidents` | incidencia del ámbito permitido | crítica: calidad |
| POST | `/v1/approvals/{approvalId}/decision` | recurso pendiente de aprobación | persona autorizada |
| GET | `/v1/audit-events` | eventos del tenant según rol | no |

## Reglas de respuesta

- Toda mutación devuelve `requestId`, `traceId`, estado resultante y `auditEventId`.
- Todo registro persistido incluye como mínimo `tenantId`, `divisionId`, `actorId`, `requestId`, `traceId`, `createdAt` y `updatedAt`.
- Las lecturas sensibles también generan un evento de auditoría (`READ`); no solo las mutaciones.
- Los handoffs conservan `messageId` y `correlationId` conforme a `docs/agents/message-envelope.md`.
- `DENY` no revela datos del recurso; `ESCALATE` devuelve una propuesta sin ejecutarla.
- El servidor aplica `can(actor, action, resource)` y el `approval-gate`; la UI solo muestra el resultado.
- Las operaciones sensibles deben ser idempotentes mediante una clave de idempotencia.
- Errores previstos: `400` para request/contexto inválido, `403` para denegación, `404` para ruta no soportada y `409` para clave de idempotencia reutilizada. Las respuestas de error no exponen detalles internos.

## Orden de implementación

1. Identidad/sesión y resolución de contexto.
2. Persistencia con `tenant_id` y `division_id` obligatorios.
3. Middleware de autorización y pruebas de aislamiento.
4. Auditoría transaccional y aprobaciones persistentes.
5. Adaptador frontend que reemplace `data.js` sin cambiar los contratos de las vistas.

Hasta completar estos pasos, el MVP sigue siendo una demo sintética y no debe recibir datos reales.

`src/scoped-repository.mjs` proporciona una implementación en memoria para probar aislamiento, timestamps y commit/rollback antes de elegir una base de datos. Debe sustituirse por persistencia transaccional real en producción.

`src/http-transport.mjs` separa el transporte HTTP del gobierno: requiere un resolver de identidad/contexto y delega al handler, sin considerar headers del cliente como autenticación.
