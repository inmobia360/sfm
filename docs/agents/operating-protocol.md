# Protocolo operativo entre agentes

## Contrato de tarea

Cada tarea debe incluir:

```json
{
  "task_id": "TASK-0001",
  "requested_by": "INFANTE",
  "owner": "JAN-QUALITY",
  "domain": "janitorial",
  "objective": "...",
  "inputs": [],
  "acceptance_criteria": [],
  "approval_required": true,
  "status": "assigned",
  "evidence": [],
  "escalation": null
}
```

## Estados

`assigned → in_progress → review → approved | rejected → completed`.

Una tarea rechazada vuelve al propietario con motivo y evidencia. Un conflicto de datos o autoridad se eleva a `INFANTE`.

## Handoff funcional de ejemplo

```text
JAN-TIME detecta fichaje fuera de zona
→ JAN-INCIDENTS crea alerta de asistencia
→ Supervisor revisa explicación
→ JAN-SCHEDULING comprueba cobertura
→ JAN-PAYROLL bloquea horas hasta aprobación
→ audit log registra cada cambio
```

## Reglas de orquestación

1. El agente padre solo delega por dominio explícito.
2. Solo se transfiere el contexto mínimo necesario.
3. Las salidas deben incluir datos fuente, recomendación, riesgo y aprobación requerida.
4. Las reglas críticas no dependen de una respuesta generativa.
5. Se evita una cadena excesiva de agentes: cada handoff debe justificar su valor.
6. Todo agente puede devolver `needs_human_review`.
