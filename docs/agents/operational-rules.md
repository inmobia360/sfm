# Reglas operativas compartidas

Los agentes no deben duplicar reglas dentro de sus prompts o handlers. Deben invocar los módulos de `src/` y registrar el resultado en el audit log.

| Flujo | Módulo | Regla de control |
|---|---|---|
| Onboarding | `onboarding-rules.mjs` | Global y puesto/centro completos antes de operar |
| Fichaje | `worker-actions.mjs` | Geofence puntual; salida pendiente de aprobación |
| Agenda | `scheduling-rules.mjs` | Frecuencia cubierta y sin solapamientos |
| Calidad | `quality-rules.mjs` | Alta prioridad escala a `JAN-QUALITY`; cierre con acción verificada |
| Formación IA | `learning-rules.mjs` | Fuente, cambios y riesgo; publicación humana |
| Payroll | `payroll-actions.mjs` | Revisar → aprobar → exportar |
| Divisiones | `division-lifecycle.mjs` | `INFANTE` aprueba `PREPARED → ACTIVE` |
| Integridad de datos | `data-integrity.mjs` | IDs y referencias operativas válidas |
| Ofertas y presupuestos | `commercial-rules.mjs` | `JANITORIAL` prepara; `INFANTE` aprueba compromisos |

## Política de ejecución

- Los módulos devuelven estados explícitos y lanzan errores ante entradas incompletas.
- Una recomendación de IA no equivale a una decisión operativa.
- La aprobación humana debe conservar actor, estado y trazabilidad.
- Las divisiones futuras permanecen aisladas hasta activación declarativa.
- Estos módulos no sustituyen autenticación, persistencia backend ni revisión legal de producción.
