# SFM Operations Intelligence — MVP demo

## Contexto

Demo frontend autónoma para explicar al presidente de SFM cómo una capa coordinadora conecta Employee 360, onboarding, formación, servicios Janitorial, fichajes, calidad, incidencias, informes y preparación de payroll.

## Usuarios

- Presidente / `INFANTE`: visión corporativa y decisiones agregadas.
- CEO de Janitorial: operación, contratos, costes y cobertura de la división.
- Supervisor: equipo, turnos, tareas, incidencias y aprobaciones.
- RRHH: altas, onboarding, cursos y documentación.
- Calidad: inspecciones, evidencias y acciones correctivas.
- Payroll: horas revisadas y exportación.
- Trabajador: turno, fichaje, checklist, formación e incidencia.

## Requisitos funcionales

- **RF-01:** El sistema debe mostrar una advertencia persistente de entorno demo y datos sintéticos.
- **RF-02:** El sistema debe permitir cambiar entre `INFANTE`, `JANITORIAL`, supervisor, RRHH y trabajador.
- **RF-03:** El sistema debe mostrar diez empleados, tres centros y tres familias de servicio.
- **RF-04:** El sistema debe mostrar Employee 360 mediante un ID interno único.
- **RF-05:** El sistema debe diferenciar onboarding global y onboarding específico por puesto/centro.
- **RF-06:** El sistema debe mostrar diez microcursos con duración inferior a diez minutos.
- **RF-07:** La actualización formativa con IA debe mostrar fuente, cambios, riesgo y aprobación humana.
- **RF-08:** La limpieza general debe reflejar frecuencia de lunes a viernes; suelos/moquetas, dos veces por semana.
- **RF-09:** El sistema debe mostrar la rotación de `JAN-007` sin conflicto de agenda.
- **RF-10:** El trabajador debe poder simular fichaje de entrada/salida con geofence puntual.
- **RF-11:** El trabajador debe poder completar una checklist y crear una incidencia.
- **RF-12:** Una incidencia debe contener centro, categoría, prioridad, estado y acción correctiva.
- **RF-13:** El sistema debe mostrar inspecciones, calidad y reincidencias.
- **RF-14:** Las horas deben pasar por revisión/aprobación antes de exportarse.
- **RF-15:** El sistema debe generar informe sintético de cliente y exportar CSV/JSON.
- **RF-16:** El sistema debe mostrar dashboard de Janitorial y dashboard corporativo de INFANTE.
- **RF-17:** El sistema debe ofrecer recorrido ejecutivo end-to-end.
- **RF-18:** Las acciones importantes deben generar eventos de audit log local.
- **RF-19:** Las futuras divisiones deben aparecer como paquetes preparados y aislados.
- **RF-20:** La interfaz debe ser usable en escritorio, tablet y móvil.

## Casos límite

- Fichaje fuera de zona: alerta y revisión del supervisor.
- Fichaje olvidado: corrección solicitada y horas bloqueadas.
- Checklist incompleta: no permitir cierre.
- Inspección rechazada: crear acción correctiva.
- Curso generado por IA: no publicar sin aprobación.
- Incidencia crítica: escalar a supervisor/calidad.
- Datos de otra división: no visibles para `JANITORIAL`.

## Fuera de alcance

Nómina legal, autenticación productiva, GPS continuo, datos reales, almacenamiento de fotos reales, integraciones reales, decisiones laborales autónomas y publicación automática de contenido sensible.

## Criterios de finalización

La demo debe abrirse sin configuración compleja, recorrer la historia completa con datos sintéticos, demostrar los ocho escenarios del prompt maestro y permitir explicar claramente qué es funcional, qué es simulado y qué queda reservado para producción.
