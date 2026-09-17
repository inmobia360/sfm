# Puerta de decisión para producción

Este documento evita convertir la demo en producción por accidente. Ninguna opción se considera elegida hasta que el usuario la apruebe y quede registrada en esta puerta.

| Decisión | Opciones a evaluar | Criterio mínimo de aceptación | Estado |
|---|---|---|---|
| Identidad y sesiones | Proveedor gestionado o IAM propio | sesiones expirables, revocación, MFA y resolución server-side de tenant/división/rol | Pendiente |
| Persistencia | PostgreSQL gestionado u otro almacén transaccional | migraciones, índices de ámbito, rollback, concurrencia y copias verificadas | Pendiente |
| Cola y reintentos | cola gestionada o worker persistente | `messageId`/`correlationId`, deduplicación, reintentos acotados y dead-letter | Pendiente |
| Despliegue | plataforma acordada por el equipo | secretos gestionados, logs, healthcheck, rollback y separación demo/producción | Pendiente |
| Cumplimiento | revisión RGPD, AI Act y laboral | minimización, retención, derechos, supervisión humana y registro de decisiones | Pendiente |

## Criterios que no se pueden delegar

- No introducir datos laborales reales, payroll legal o GPS continuo hasta cerrar la revisión de cumplimiento.
- No activar `SECURITY`, `LANDSCAPING` u otra división hasta disponer de configuración, aislamiento y pruebas negativas propias.
- No sustituir el `contextResolver` por headers enviados por el navegador.
- No declarar producción lista porque el handler de prueba o GitHub Pages funcionen.

## Orden de cierre

1. Registrar proveedor y responsable de cada decisión.
2. Adaptar el repositorio transaccional y ejecutar pruebas de aislamiento/concurrencia.
3. Conectar identidad server-side y repetir autorización en cada endpoint.
4. Persistir aprobaciones, handoffs y auditoría con reintentos controlados.
5. Ejecutar revisión de seguridad, cumplimiento y recorrido de aceptación antes de cualquier dato real.

La decisión final debe conservar fecha, responsable, alternativa descartada, motivo y evidencia de prueba.
