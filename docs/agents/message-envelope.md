# Sobre estándar de mensajes entre agentes

Todo handoff entre agentes debe utilizar un mensaje trazable. El contenido puede ampliarse por dominio, pero no debe eliminar los campos de gobierno.

```json
{
  "messageId": "MSG-2026-00041",
  "correlationId": "FLOW-ONBOARDING-JAN-011",
  "createdAt": "2026-09-16T12:00:00Z",
  "from": { "agentId": "INFANTE", "role": "DIRECTOR" },
  "to": { "agentId": "JAN-ONBOARDING", "role": "SPECIALIST" },
  "intent": "CREATE_ONBOARDING_PLAN",
  "priority": "HIGH",
  "scope": { "divisionId": "JANITORIAL", "siteIds": ["C-001"] },
  "payload": { "employeeId": "JAN-011", "startDate": "2026-09-21" },
  "requiresHumanApproval": false,
  "replyTo": "INFANTE",
  "status": "REQUESTED"
}
```

## Reglas de operación

- `messageId` identifica una entrega única; `correlationId` agrupa el flujo completo.
- `from`, `to`, `scope` e `intent` son obligatorios y se validan antes de ejecutar.
- Un agente no puede ampliar el `scope` recibido. Para ampliar ámbito debe escalar a INFANTE.
- Las respuestas deben mantener el mismo `correlationId` e incluir `status`, resultado, riesgos y siguiente acción.
- `requiresHumanApproval: true` bloquea la mutación final hasta registrar una aprobación humana.
- Cada mensaje entrante, saliente, rechazado o escalado se registra en el audit log.
- Los agentes subordinados proponen y ejecutan dentro de su especialidad; INFANTE resuelve conflictos entre divisiones.

## Estados

`REQUESTED → ACCEPTED → IN_PROGRESS → WAITING_APPROVAL → COMPLETED`.

Las terminaciones alternativas son `REJECTED`, `ESCALATED` o `FAILED`, siempre con motivo y agente responsable.
