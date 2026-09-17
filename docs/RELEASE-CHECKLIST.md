# Checklist de release SFM MVP

## Gobierno y agentes

- [x] `INFANTE` está identificado como director.
- [x] `JANITORIAL` es la única división operativa activa.
- [x] Las divisiones futuras permanecen aisladas y preparadas.
- [x] Cada handoff conserva `messageId` y `correlationId`.
- [x] Las acciones sensibles pasan por `can(...)` y `approval-gate`.

## Datos y seguridad

- [x] Todos los datos de la demo son sintéticos.
- [x] La UI no se considera autenticación.
- [x] El backend futuro debe repetir el aislamiento por división, centro y empleado.
- [x] No se activan GPS continuo, payroll legal ni integraciones externas sin revisión.
- [x] Los eventos de runtime quedan registrados en audit log.

## Verificación

- [x] `npm test` pasa completamente.
- [x] `npm run validate` pasa completamente.
- [ ] Se verifica el shell en navegador.
- [ ] Se prueba al menos un caso permitido y uno rechazado por cada rol sensible.
- [x] Se revisa `git status` y el commit publicado.
- [ ] La comprobación CI de GitHub Actions está verde.

## Pendiente antes de producción

Autenticación, autorización server-side, tenant isolation, persistencia, colas, secretos gestionados, observabilidad, revisión RGPD/AI Act y validación humana de procesos laborales.
