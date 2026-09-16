# Contrato de enforcement por rol

Este documento convierte la matriz organizativa en una regla técnica común para el MVP y sus futuras APIs.

## Principios

1. El rol determina el ámbito antes de cargar datos; ocultar una vista no es una medida de seguridad.
2. Cada consulta debe filtrar por `divisionId`, `siteIds` y, cuando corresponda, `employeeId`.
3. INFANTE recibe indicadores agregados y puede asignar trabajo a cualquier división activa.
4. JANITORIAL solo recibe datos de su división: contratos, presupuestos, clientes, centros, empleados y servicios Janitorial.
5. Un trabajador solo recibe sus tareas, su formación, su fichaje y sus incidencias creadas por él.
6. Presupuesto, contrato, payroll, alta laboral y decisiones con impacto legal requieren aprobación humana.
7. Toda asignación, lectura sensible, aprobación y escalado genera un evento de auditoría.

## Contexto mínimo

```json
{
  "actorId": "JAN-007",
  "role": "WORKER",
  "divisionId": "JANITORIAL",
  "siteIds": ["C-003"],
  "employeeId": "JAN-007",
  "approvalLevel": "NONE"
}
```

## Decisión de acceso

La aplicación debe resolver `can(actor, action, resource)` antes de ejecutar una mutación. Si la decisión es `ESCALATE`, el agente prepara la propuesta y la entrega a INFANTE o a la persona autorizada; nunca la confirma autónomamente.

El archivo [role-context.html](../../role-context.html) es la referencia visual del contrato. El backend deberá convertir estas reglas en autorización real antes de usar datos productivos.
