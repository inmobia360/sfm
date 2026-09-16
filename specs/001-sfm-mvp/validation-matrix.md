# Matriz de validación del MVP

| Requisitos | Evidencia actual | Estado |
|---|---|---|
| RF-01 | Banner en todas las vistas | Verificado |
| RF-02 | Selector de rol en `index.html` y lanzador unificado | Verificado en demo |
| RF-03 | `data.js`: 10 empleados, 3 centros, 3 servicios | Verificado |
| RF-04 | Employee 360 en `index.html` | Verificado |
| RF-05 | `scenarios.html`, etapa de onboarding | Simulado |
| RF-06 | `training.html`: 10 cursos | Verificado |
| RF-07 | `training.html`: propuesta v2 y aprobación humana | Verificado |
| RF-08 | `data.js`, `scenarios.html` y panel Janitorial | Verificado visual |
| RF-09 | Rotación de JAN-007 en `scenarios.html` | Verificado visual |
| RF-10 | `worker.html`: entrada/salida y geofence simulado | Verificado visual |
| RF-11 | `worker.html`: checklist e incidencia | Verificado |
| RF-12 | `data.js` y `quality` en `index.html` | Verificado visual |
| RF-13 | `quality` e informe de cliente | Verificado visual |
| RF-14 | `src/payroll-actions.mjs` y exportación en `report.html` | Reglas verificadas; UI demo |
| RF-15 | `report.html`: JSON/CSV | Verificado visual |
| RF-16 | `index.html` y `ceo.html` | Verificado visual |
| RF-17 | `scenarios.html` y `launch.html` | Verificado |
| RF-18 | `audit.html` y mutaciones de `data.js` | Verificado visual |
| RF-19 | `ceo.html` e `integrations.html` | Verificado visual |
| RF-20 | CSS responsive y vistas móviles | Verificación visual pendiente en hardware |

## Interpretación

“Verificado visual” significa que la vista carga y presenta el contenido. “Simulado” significa que el flujo se representa sin backend real. “Parcial” identifica trabajo que debe conectarse o probarse de forma más profunda antes de una afirmación de producción.

## Pendientes críticos

1. Conectar todas las vistas a una única sesión de estado compartida.
2. Hacer que las aprobaciones cambien estados visibles entre pantallas.
3. Añadir pruebas automatizadas compatibles con el entorno de ejecución.
4. Verificar responsive en un dispositivo móvil real.
5. Habilitar GitHub Pages en el repositorio y confirmar la URL pública.
