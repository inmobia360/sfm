# Checklist de release SFM MVP

## Gobierno y agentes

- [ ] `INFANTE` está identificado como director.
- [ ] `JANITORIAL` es la única división operativa activa.
- [ ] Las divisiones futuras permanecen aisladas y preparadas.
- [ ] Cada handoff conserva `messageId` y `correlationId`.
- [ ] Las acciones sensibles pasan por `can(...)` y `approval-gate`.

## Datos y seguridad

- [ ] Todos los datos de la demo son sintéticos.
- [ ] La UI no se considera autenticación.
- [ ] El backend futuro debe repetir el aislamiento por división, centro y empleado.
- [ ] No se activan GPS continuo, payroll legal ni integraciones externas sin revisión.
- [ ] Los eventos de runtime quedan registrados en audit log.

## Verificación

- [ ] `npm test` pasa completamente.
- [ ] `npm run validate` pasa completamente.
- [ ] Se verifica el shell en navegador.
- [ ] Se prueba al menos un caso permitido y uno rechazado por cada rol sensible.
- [ ] Se revisa `git status` y el commit publicado.

## Pendiente antes de producción

Autenticación, autorización server-side, tenant isolation, persistencia, colas, secretos gestionados, observabilidad, revisión RGPD/AI Act y validación humana de procesos laborales.
