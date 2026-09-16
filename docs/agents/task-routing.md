# Enrutamiento de tareas para INFANTE

`INFANTE` debe asignar una tarea al agente con el dominio más específico, pasar solo el contexto mínimo y exigir evidencia antes de marcarla completada.

| Tipo de tarea | Agente propietario | Revisor |
|---|---|---|
| Spec, requisitos o cambio de alcance | `DEV-PRODUCT-SDD` | INFANTE |
| Estado, entidades o reglas | `DEV-DATA` | `DEV-ARCHITECTURE` |
| Pantalla o interacción | `DEV-FRONTEND` | `DEV-UX` |
| Flujo laboral | agente funcional de dominio | `DEV-QUALITY-TEST` |
| Seguridad, permisos o aislamiento | `DEV-SECURITY` | `CORP-GOVERNANCE` |
| Prueba y criterios | `DEV-QUALITY-TEST` | INFANTE |
| README, guion o entrega | `DEV-DOCS` | INFANTE |
