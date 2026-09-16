# Plan técnico del MVP

## Decisión de implementación

Frontend estático sin dependencias de runtime: HTML, CSS y JavaScript modular, servido directamente o mediante GitHub Pages. `data.js` es el adaptador de estado de demo; su contrato podrá sustituirse por API posteriormente.

## Capas

1. Presentación: vistas ejecutivas, operativas, móviles y de reporte.
2. Estado: entidades sintéticas, persistencia local y reset.
3. Reglas: frecuencias, conflictos, geofence, aprobaciones y escalados.
4. Evidencia: audit log, exportaciones y estados.
5. Gobierno: roles, límites de división y mensajes de demo.

## Flujo de entrega

`DEV-PRODUCT-SDD` valida spec → `DEV-ARCHITECTURE` valida contratos → `DEV-DATA` prepara estado → `DEV-UX` define recorrido → `DEV-FRONTEND` implementa → `DEV-QUALITY-TEST` verifica RF → `DEV-DOCS` prepara entrega.

## Dependencias críticas

- Las vistas dependen del contrato de datos.
- Las acciones sensibles dependen del modelo de aprobación.
- Payroll depende de fichajes aprobados.
- Informes dependen de tareas, calidad e incidencias.
- Dashboard corporativo depende de métricas agregadas.
