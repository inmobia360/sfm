# Matriz de autoridad y datos

| Acción | Agente ejecutor | Aprobación | Escalado |
|---|---|---|---|
| Crear empleado demo | `JAN-ONBOARDING` | RRHH | `INFANTE` si cambia política |
| Asignar turno o centro | `JAN-SCHEDULING` | Supervisor | `JANITORIAL` si afecta cobertura |
| Registrar fichaje | `JAN-TIME` | automática provisional | Supervisor si anomalía |
| Corregir fichaje | `JAN-TIME` | Supervisor | RRHH si reincidencia |
| Publicar curso | `JAN-LEARNING` | RRHH/Calidad | `INFANTE` si es corporativo |
| Clasificar incidencia | `JAN-INCIDENTS` | Supervisor | Calidad si crítica |
| Cerrar no conformidad | `JAN-QUALITY` | Responsable de calidad | `JANITORIAL` si afecta cliente |
| Cambiar presupuesto | `JAN-FINANCE` | `JANITORIAL` | `INFANTE` si supera umbral |
| Preparar payroll | `JAN-PAYROLL` | Supervisor/Payroll | `INFANTE` solo por riesgo transversal |
| Emitir informe cliente | `JAN-REPORTING` | Supervisor o CEO divisional | `INFANTE` si es corporativo |
| Recomendar acción IA | `JAN-COPILOT` | usuario autorizado | `INFANTE` si cruza dominios |

## Aislamiento

- `INFANTE`: visión agregada corporativa y metadatos de gobierno.
- Staff corporativo: datos necesarios para su función.
- `JANITORIAL`: empleados, centros, contratos y operaciones de Janitorial.
- Futuros CEOs: solo su división.
- Cliente: informes y evidencias autorizadas, nunca expediente laboral completo.

Todo registro futuro debe contemplar `tenant_id`, `division_id`, `actor_id`, `request_id`, `trace_id`, `created_at` y `updated_at`.
