# Frontera de producción

Este MVP es una demo estática con datos sintéticos y `localStorage`. La siguiente fase no debe reutilizar el navegador como fuente de verdad para permisos, decisiones laborales o compromisos comerciales.

## Puertas obligatorias

| Puerta | Responsable | Evidencia mínima | Estado |
|---|---|---|---|
| Backend y persistencia | DEV-ARCHITECTURE + DEV-DATA | API versionada, migraciones y control de concurrencia | Pendiente |
| Identidad y sesiones | DEV-SECURITY | Login, expiración, revocación y gestión de secretos | Pendiente |
| Autorización server-side | DEV-SECURITY + CORP-GOVERNANCE | `can(actor, action, resource)` ejecutado en servidor y pruebas negativas | Pendiente |
| Aislamiento multiempresa | DEV-DATA | `tenant_id` obligatorio y pruebas de fuga entre tenant/división/centro | Pendiente |
| Aprobaciones humanas | INFANTE + CORP-GOVERNANCE | approval-gate persistente, actor, motivo y audit trail | Pendiente |
| Datos laborales y legales | CORP-GOVERNANCE | revisión RGPD/AI Act y revisión laboral antes de activar payroll/GPS | Pendiente |
| Operación observable | DEV-ARCHITECTURE | colas, reintentos, métricas, logs y alertas sin PII innecesaria | Pendiente |

## Reglas de transición

- `JANITORIAL` solo puede operar sobre su división y sus recursos autorizados.
- `INFANTE` puede asignar trabajo y aprobar cambios corporativos, pero las aprobaciones sensibles deben quedar registradas.
- SECURITY, LANDSCAPING, EVENTS y DISASTER_RECOVERY permanecen preparadas, no activas.
- No conectar credenciales, datos reales, payroll legal, GPS continuo o integraciones externas hasta cerrar todas las puertas aplicables.
- Cualquier despliegue productivo requiere revisión humana explícita y evidencia de rollback.
