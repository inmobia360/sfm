# Nota pendiente — continuar SFM MVP

Fecha de la nota: 16 de septiembre de 2026

## Estado actual

La arquitectura de agentes está creada y validada: `INFANTE` dirige la capa corporativa, `JANITORIAL` dirige la operación y el roster incluye 26 agentes activos más 9 agentes de desarrollo. Las especialidades, divisiones activas/preparadas, autorización, aprobación humana, routing, auditoría y aislamiento están protegidos por configuración y pruebas.

La frontera backend ya dispone de handler agnóstico (`src/production-api-handler.mjs`), contexto y autorización server-side preparadas, acciones gobernadas con aprobación humana y repositorio aislado con commit/rollback. Estas piezas son una base de prueba; todavía no constituyen un servicio productivo.

El MVP demo incluye Employee 360, onboarding, trabajador, escenarios, formación IA, calidad, payroll, informes, alertas, auditoría y lanzador. Las reglas reutilizables están en `src/` y la suite completa se ejecuta con `npm test`; la topología se valida con `npm run validate`.

## Próximo trabajo prioritario

1. T10 completado: las vistas del MVP usan el adaptador común `data.js`; mantenerlo como frontera para la futura API.
2. T12 parcialmente verificado: `npm run demo:serve` levanta el servidor local; el navegador integrado recorrió las 9 vistas, confirmó el layout sin overflow en el viewport disponible y ejecutó el flujo del trabajador (fichaje, 5/5 checks y envío a revisión). Sigue pendiente el recorrido automatizado completo desktop/tablet/mobile porque Playwright no puede lanzar Chromium en este entorno (`WinError 5`); no se ha declarado T12 completado.
3. Ejecutar recorrido real en navegador de worker, escenarios, informe, alertas y auditoría.
4. Verificar responsive en escritorio, tablet y móvil real.
5. Confirmar externamente GitHub Actions y habilitar GitHub Pages manualmente desde Settings; el workflow y los checks ya están definidos, pero la URL pública no se ha verificado desde este entorno.
6. Para producción: seguir `docs/PRODUCTION-BOUNDARY.md` antes de conectar datos o servicios reales.
7. Backend: contrato inicial implementado como handler/transporte agnóstico, con contexto, autorización, dashboard, auditoría y ciclo de aprobaciones; elegir proveedor e identidad server-side antes de producción.
8. Persistencia: `src/scoped-repository.mjs` ya cubre aislamiento y commit/rollback síncrono y asíncrono en memoria; sustituirlo por un adaptador transaccional real después de elegir proveedor y cerrar concurrencia, migraciones y rollback.

## Comandos de reanudación

```text
npm test
npm run validate
git status -sb
```

No presentar el proyecto como producción: sigue siendo un MVP con datos sintéticos, persistencia local y aprobaciones simuladas en algunas vistas.
