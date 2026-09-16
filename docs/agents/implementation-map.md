# Mapa de implementación por capas

| Capa | Responsabilidad | Estado MVP | Límite explícito |
|---|---|---|---|
| Presentación | Dashboards, launchpad, roles y escenarios | Demo navegable | No constituye autenticación |
| Contexto de rol | Vistas y ámbito visible por actor | Implementado en shell | El backend debe repetir el control |
| Datos demo | Empleados, centros, tareas, incidencias y audit log | `localStorage` sintético | No usar datos laborales reales |
| Envelope | Contrato de handoff y correlación | Implementado y probado | No transporta secretos |
| Registry | Agentes, especialidad, división y estado | Implementado y probado | Requiere persistencia futura |
| Router | Resolución de intención y división | Implementado y probado | No ejecuta acciones externas |
| Access policy | `ALLOW`, `DENY`, `ESCALATE` | Implementado y probado | No sustituye IAM/tenant isolation |
| Approval gate | Bloqueo de decisiones sensibles | Implementado y probado | Aprobación humana obligatoria |
| Runtime | Orquestación de handoff y transición | Implementado y probado | Sin colas ni workers persistentes |
| Métricas | Indicadores agregados por división | Implementado y probado | No es contabilidad legal |
| Infraestructura futura | API, base de datos, autenticación, colas e integraciones | Pendiente | Diseñar después de validar demo |

## Secuencia recomendada

1. Validar el recorrido Janitorial con datos sintéticos.
2. Convertir `localStorage` en una API con tenant y división.
3. Aplicar `can(actor, action, resource)` en cada endpoint, no solo en la UI.
4. Persistir envelope, decisiones y eventos en una cola auditable.
5. Activar Security y Landscaping mediante registros y pruebas de aislamiento.
