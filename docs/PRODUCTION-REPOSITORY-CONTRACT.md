# Contrato del repositorio persistente

Este contrato define la frontera entre el dominio SFM y cualquier almacén productivo. No selecciona proveedor ni habilita datos reales.

## Operaciones obligatorias

| Operación | Garantía mínima |
|---|---|
| `list(context, predicate)` | solo devuelve registros del `tenantId`, `divisionId` y centros autorizados del contexto |
| `append(context, record)` | valida ámbito en servidor y escribe `createdAt`, `updatedAt` y trazabilidad |
| `transaction(context, callback)` | atomicidad: commit completo o rollback completo |
| `transactionAsync(context, callback)` | misma atomicidad aunque el callback espere operaciones externas |
| `commit(idempotencyKey)` | una clave solo produce una mutación observable |

## Invariantes de producción

- `tenant_id` y `division_id` son obligatorios y no mutables desde la interfaz.
- El proveedor debe rechazar escrituras fuera del ámbito antes de ejecutar la operación.
- Las transacciones deben detectar conflictos de concurrencia y devolver un error recuperable, sin sobrescribir cambios ajenos.
- Aprobaciones, handoffs y auditoría se escriben en la misma unidad transaccional que la mutación gobernada.
- Los reintentos conservan `requestId`, `traceId`, `messageId` y `correlationId`.
- Las migraciones, índices de ámbito, copias y restauraciones deben probarse antes de sustituir `src/scoped-repository.mjs`.

## Evidencia para cerrar la puerta

DEV-DATA y DEV-SECURITY deben aportar pruebas de aislamiento entre tenant/división/centro, rollback síncrono y asíncrono, concurrencia, idempotencia, restauración y auditoría transaccional. Hasta entonces, el adaptador en memoria sigue siendo únicamente de demo.
