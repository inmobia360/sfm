# Nota pendiente — continuar SFM MVP

Fecha de la nota: 16 de septiembre de 2026

## Estado actual

La arquitectura de agentes está creada y validada: `INFANTE` dirige la capa corporativa, `JANITORIAL` dirige la operación y el roster incluye 26 agentes activos más 9 agentes de desarrollo. Las especialidades, divisiones activas/preparadas, autorización, aprobación humana, routing, auditoría y aislamiento están protegidos por configuración y pruebas.

La frontera backend ya dispone de handler agnóstico (`src/production-api-handler.mjs`), contexto y autorización server-side preparadas, acciones gobernadas con aprobación humana y repositorio aislado con commit/rollback. Estas piezas son una base de prueba; todavía no constituyen un servicio productivo.

El MVP demo incluye Employee 360, onboarding, trabajador, escenarios, formación IA, calidad, payroll, informes, alertas, auditoría y lanzador. Las reglas reutilizables están en `src/` y la suite completa se ejecuta con `npm test`; la topología se valida con `npm run validate`.

## Próximo trabajo prioritario

1. T10 completado: las vistas del MVP usan el adaptador común `data.js`; mantenerlo como frontera para la futura API.
2. T12 completado: `tests/browser-t12.py` verificó las 10 vistas en escritorio, tablet y móvil, sin overflow, y ejecutó el flujo del trabajador (fichaje, 5/5 checks y envío a revisión). La ejecución requirió permisos elevados para superar la restricción local de procesos de Playwright (`WinError 5`).
3. Completado en navegador integrado: se recorrieron dashboard, escenarios, worker, formación, informe, alertas, integraciones y auditoría; el worker ejecutó fichaje, checklist 5/5 y envío a revisión. La evidencia es de demo local con datos sintéticos.
4. Completado junto con T12: responsive verificado automáticamente en 1440×900, 768×1024 y 390×844. Queda recomendable una revisión visual en dispositivo físico antes de una presentación externa.
5. Confirmar externamente GitHub Actions y habilitar GitHub Pages manualmente desde Settings; el workflow y los checks ya están definidos, pero la URL pública no se ha verificado desde este entorno.
6. Para producción: seguir `docs/PRODUCTION-BOUNDARY.md` antes de conectar datos o servicios reales.
7. Backend: contrato inicial implementado como handler/transporte agnóstico, con contexto, autorización, dashboard, auditoría y ciclo de aprobaciones; elegir proveedor e identidad server-side antes de producción.
8. Persistencia: `src/scoped-repository.mjs` ya cubre aislamiento y commit/rollback síncrono y asíncrono en memoria; sustituirlo por un adaptador transaccional real después de elegir proveedor y cerrar concurrencia, migraciones y rollback.
9. Decisiones productivas: completar `docs/PRODUCTION-DECISION-GATE.md` con proveedor, responsables y evidencias antes de activar cualquier entorno real.

## Comandos de reanudación

```text
npm test
npm run validate
git status -sb
```

No presentar el proyecto como producción: sigue siendo un MVP con datos sintéticos, persistencia local y aprobaciones simuladas en algunas vistas.
