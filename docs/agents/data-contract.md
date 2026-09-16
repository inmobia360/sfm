# Contrato inicial de datos de la demo

El archivo `data.js` contiene el estado central sintético de la demo. Las vistas no deberían crear empleados, centros, tareas o incidencias de forma aislada: deben leer este estado y emitir eventos auditables.

## Entidades mínimas

`employees`, `sites`, `services`, `tasks`, `incidents` y `audit`.

## Reglas demostrables

- `JAN-007` tiene asignación multicentro para representar la rotación clínica/colegio.
- La limpieza general usa frecuencia de lunes a viernes.
- Suelos y moquetas usa frecuencia de dos veces por semana.
- Las incidencias mantienen centro, categoría, prioridad y estado.
- Las acciones relevantes se registran en `audit`.
- `localStorage` es persistencia de demo; producción requerirá API, autenticación y aislamiento por organización.
