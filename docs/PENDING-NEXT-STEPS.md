# Nota pendiente — continuar SFM MVP

Fecha de la nota: 16 de septiembre de 2026

## Estado actual

La arquitectura de agentes está creada y validada: `INFANTE` dirige la capa corporativa, `JANITORIAL` dirige la operación y el roster incluye 26 agentes activos más 9 agentes de desarrollo. Las especialidades, divisiones activas/preparadas, autorización, aprobación humana, routing, auditoría y aislamiento están protegidos por configuración y pruebas.

El MVP demo incluye Employee 360, onboarding, trabajador, escenarios, formación IA, calidad, payroll, informes, alertas, auditoría y lanzador. Las reglas reutilizables están en `src/` y la suite completa se ejecuta con `npm test`; la topología se valida con `npm run validate`.

## Próximo trabajo prioritario

1. Completar T10: migrar las vistas restantes a un adaptador único de estado y eliminar handlers simulados duplicados.
2. Ejecutar recorrido real en navegador de worker, escenarios, informe, alertas y auditoría.
3. Verificar responsive en escritorio, tablet y móvil real.
4. Confirmar GitHub Actions y habilitar GitHub Pages manualmente desde Settings.
5. Para producción: backend, autenticación, autorización server-side, tenant isolation, persistencia, colas, secretos, observabilidad y revisión RGPD/AI Act.

## Comandos de reanudación

```text
npm test
npm run validate
git status -sb
```

No presentar el proyecto como producción: sigue siendo un MVP con datos sintéticos, persistencia local y aprobaciones simuladas en algunas vistas.
