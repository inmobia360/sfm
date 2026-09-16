# Contrato de reglas reutilizables

`data.js` expone mutaciones mínimas para que las vistas compartan comportamiento:

- `sfmCommit`: persiste y audita una acción.
- `sfmCreateIncident`: crea una incidencia con ID y estado.
- `sfmApproveHours`: registra aprobación de horas.
- `sfmGeofence`: calcula de forma determinista si un fichaje está dentro del radio.

Estas funciones son simulación local. En producción deben ejecutarse en servidor, con autorización por rol y validación de organización/división.
