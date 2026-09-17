# Nota pendiente — continuar SFM MVP

Fecha de la nota: 16 de septiembre de 2026

## Estado actual

La arquitectura de agentes está creada y validada: `INFANTE` dirige la capa corporativa, `JANITORIAL` dirige la operación y el roster incluye 26 agentes activos más 9 agentes de desarrollo. Las especialidades, divisiones activas/preparadas, autorización, aprobación humana, routing, auditoría y aislamiento están protegidos por configuración y pruebas.

La frontera backend ya dispone de handler agnóstico (`src/production-api-handler.mjs`), contexto y autorización server-side preparadas, acciones gobernadas con aprobación humana y repositorio aislado con commit/rollback. Estas piezas son una base de prueba; todavía no constituyen un servicio productivo.

El MVP demo incluye Employee 360, onboarding, trabajador, escenarios, formación IA, calidad, payroll, informes, alertas, auditoría y lanzador. Las reglas reutilizables están en `src/` y la suite completa se ejecuta con `npm test`; la topología se valida con `npm run validate`.

## Próximo trabajo prioritario

1. T10 completado: las vistas del MVP usan el adaptador común `data.js`; mantenerlo como frontera para la futura API.
2. T12 en curso: existe `tests/browser-t12.py` para recorrer 9 vistas en desktop/tablet/mobile y validar el flujo de trabajador. La ejecución queda pendiente porque este entorno bloquea el lanzamiento de Chromium con `WinError 5 (Acceso denegado)`; no se ha declarado T12 completado.
3. Ejecutar recorrido real en navegador de worker, escenarios, informe, alertas y auditoría.
4. Verificar responsive en escritorio, tablet y móvil real.
5. Confirmar externamente GitHub Actions y habilitar GitHub Pages manualmente desde Settings; el workflow y los checks ya están definidos, pero la URL pública no se ha verificado desde este entorno.
6. Para producción: seguir `docs/PRODUCTION-BOUNDARY.md` antes de conectar datos o servicios reales.
7. Backend: usar `docs/PRODUCTION-API-CONTRACT.md` como contrato inicial antes de elegir proveedor o base de datos.
8. Persistencia: sustituir `src/scoped-repository.mjs` por un adaptador transaccional después de elegir proveedor y cerrar las pruebas de concurrencia/rollback.

## Comandos de reanudación

```text
npm test
npm run validate
git status -sb
```

No presentar el proyecto como producción: sigue siendo un MVP con datos sintéticos, persistencia local y aprobaciones simuladas en algunas vistas.
