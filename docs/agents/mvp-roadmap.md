# Orden recomendado de construcción del MVP

## Fase 0 — Gobierno y SDD

- Constituir `INFANTE` y `JANITORIAL`.
- Aprobar especificación, modelo de estado, permisos y criterios.

## Fase 1 — Núcleo demostrable

- Estado central y localStorage.
- Roles y navegación.
- Banner de entorno demo.
- Audit log.
- Reset de datos.

## Fase 2 — Historia Employee 360

- Alta de empleado.
- ID único.
- Onboarding global y por puesto.
- Formación, tests y progreso.

## Fase 3 — Operación Janitorial

- Centros, contratos y frecuencias.
- Calendario semanal.
- Rotación de `JAN-007`.
- Limpieza general, suelos/moquetas y Event Cleaning.

## Fase 4 — Control y evidencia

- Fichaje válido, fuera de zona y olvidado.
- Tareas, checklists, fotografías sintéticas.
- Incidencias, calidad y acciones correctivas.

## Fase 5 — Dirección

- Horas aprobadas y exportación.
- Informe de cliente.
- Dashboard CEO Janitorial.
- Dashboard INFANTE/presidente.
- Copilot determinista y modo recorrido ejecutivo.

## Fase 6 — Validación

- Recorrido completo de los ocho escenarios.
- Verificación responsive.
- Validación RF por RF.
- README, arquitectura, riesgos, capturas y guion de 15 minutos.

## Fase 7 — Preparación productiva (no activada)

- `DEV-ARCHITECTURE`: convertir el handler agnóstico en servicio HTTP y definir contratos de error.
- `DEV-DATA`: sustituir `scoped-repository` por persistencia transaccional y migraciones.
- `DEV-SECURITY`: integrar identidad, sesiones, autorización server-side y gestión de secretos.
- `DEV-QUALITY-TEST`: pruebas de aislamiento entre tenant/división, concurrencia, rollback y recorrido navegador.
- `CORP-GOVERNANCE`: revisión RGPD/AI Act, aprobaciones laborales/financieras y criterios de rollback.
- `INFANTE`: aprobar cada cambio de ámbito; `JANITORIAL` conserva únicamente su ámbito operativo.

La fase 7 no empieza con datos reales ni despliegue productivo: requiere cerrar las puertas de `docs/PRODUCTION-BOUNDARY.md` y seguir `docs/PRODUCTION-API-CONTRACT.md`.
