# PROMPT MAESTRO PARA EL EQUIPO DE DESARROLLO DIGITAL

## MVP DEMO INTERACTIVO — SFM OPERATIONS INTELLIGENCE

### Título de la demo

**SFM Operations Intelligence**  
**De la incorporación del empleado a la decisión del CEO**

---

## 1. Instrucción principal

Actuad como un equipo senior de producto, UX/UI, arquitectura SaaS, desarrollo frontend, automatización, inteligencia artificial, operaciones de facility management y recursos humanos.

Debéis construir desde cero una **demo MVP interactiva, navegable y presentable ante el presidente de SFM Services, Inc.**

La demo debe representar, con datos completamente sintéticos, cómo una plataforma de gestión inteligente puede coordinar inicialmente la división de **Janitorial** y conectar:

- Recursos humanos.
- Onboarding corporativo.
- Formación por puesto.
- Fichaje y control horario.
- Geolocalización simulada.
- Planificación de turnos.
- Servicios de limpieza.
- Mantenimiento de suelos y moquetas.
- Supervisión de empleados.
- Control de calidad.
- Gestión de incidencias.
- Informes para clientes.
- Payroll mediante exportación de horas aprobadas.
- Dashboard del CEO de Janitorial.
- Dashboard global del presidente de la compañía.

La demo debe transmitir que el MVP empieza en Janitorial, pero que la arquitectura está preparada para replicarse posteriormente en:

- Security.
- Landscape.
- Events.
- Disaster Recovery.

La arquitectura común debe mantenerse y las futuras divisiones deben poder incorporarse mediante paquetes específicos de conocimiento, formularios, reglas, objetivos, métricas, checklists y workflows.

---

## 2. Objetivo de la demo

El objetivo no es crear todavía un sistema productivo completo ni un payroll legal completo.

El objetivo es construir una **experiencia visual end-to-end** que permita al presidente entender:

1. Cómo se incorpora un nuevo empleado.
2. Cómo recibe formación global y formación específica de su puesto.
3. Cómo se le asigna un centro, un turno y unas tareas.
4. Cómo ficha desde el móvil con geolocalización simulada.
5. Cómo ejecuta un servicio de limpieza.
6. Cómo registra evidencias e incidencias.
7. Cómo el supervisor controla la operación.
8. Cómo el responsable de calidad verifica el trabajo.
9. Cómo se genera un informe para el cliente.
10. Cómo se validan las horas y se prepara la exportación al payroll.
11. Cómo los datos operativos llegan al CEO de Janitorial.
12. Cómo el presidente obtiene una visión consolidada de la compañía.

La demo debe responder visualmente a esta pregunta:

> ¿Cómo puede SFM pasar de gestionar datos dispersos de empleados, centros, servicios, calidad e incidencias a disponer de una visión única, trazable y accionable de toda la operación?

---

## 3. Principio de diseño del producto

La solución debe concebirse como una **capa inteligente de coordinación e integración**, no como una sustitución inmediata de todas las herramientas existentes.

La demo debe mostrar una plataforma preparada para integrarse posteriormente con herramientas como:

- Sistemas de RRHH.
- Sistemas de payroll.
- OrangeQC u otras plataformas de calidad.
- Whip Around u otras plataformas de flota.
- Sistemas de correo.
- Calendarios.
- CRM.
- APIs externas.
- Webhooks.

En la demo, las integraciones podrán estar simuladas, pero deben estar representadas en la interfaz como puntos de conexión futuros.

---

## 4. Alcance técnico de esta demo

### 4.1 Tipo de entrega

Crear una demo frontend funcional y autónoma que pueda ejecutarse fácilmente:

- Preferiblemente mediante un archivo `index.html`.
- Sin necesidad de instalar dependencias.
- Sin API keys.
- Sin datos reales.
- Sin conexión obligatoria a servicios externos.
- Con datos sintéticos embebidos.
- Con persistencia local mediante `localStorage`.
- Con opción de restablecer los datos de demostración.

Si se utiliza React, Next.js u otro framework, debe entregarse también una versión estática compilada que pueda abrirse o desplegarse fácilmente en Hostinger, GitHub Pages o un hosting estático.

### 4.2 Separación entre demo y producción

Debe aparecer claramente en la interfaz una etiqueta:

> **ENTORNO DEMO — DATOS SINTÉTICOS — NO UTILIZAR CON DATOS LABORALES REALES**

La demo no debe aparentar que:

- Está conectada a un sistema de nóminas real.
- Está capturando la ubicación real del dispositivo.
- Está autenticando trabajadores reales.
- Está calculando nóminas definitivas.
- Está tomando decisiones laborales automáticas.

---

## 5. Modelo de usuarios y roles

Implementar un selector de rol para poder cambiar rápidamente entre las siguientes vistas:

### 5.1 Trabajador

Puede consultar:

- Su perfil.
- Su ID único.
- Su puesto.
- Su centro.
- Su turno.
- Sus tareas.
- Sus cursos.
- Su progreso formativo.
- Sus fichajes.
- Sus alertas.
- Sus incidencias.

Puede ejecutar acciones simuladas:

- Fichar entrada.
- Fichar salida.
- Completar checklist.
- Subir una fotografía sintética.
- Crear una incidencia.
- Realizar un tutorial.
- Responder un test.
- Solicitar corrección de un fichaje.

### 5.2 Supervisor de Janitorial

Puede consultar y gestionar:

- Todos los trabajadores asignados.
- Turnos.
- Centros.
- Tareas.
- Cobertura.
- Fichajes.
- Incidencias.
- Inspecciones.
- Sustituciones.
- Acciones correctivas.
- Informes.

Puede:

- Asignar tareas.
- Reasignar trabajadores.
- Aprobar fichajes.
- Validar incidencias.
- Solicitar correcciones.
- Cerrar acciones correctivas.
- Aprobar horas para payroll.

### 5.3 Responsable de calidad

Puede consultar:

- Inspecciones.
- Checklists.
- Fotografías.
- Incidencias.
- Deficiencias.
- Acciones correctivas.
- Puntuación de calidad.
- Tendencias por centro.

Puede:

- Crear inspecciones.
- Registrar hallazgos.
- Aprobar o rechazar evidencias.
- Solicitar una nueva revisión.
- Cerrar una no conformidad.

### 5.4 Recursos humanos

Puede consultar y gestionar:

- Empleados.
- Nuevas incorporaciones.
- Onboarding global.
- Onboarding por puesto.
- Formación.
- Certificaciones.
- Documentación.
- Alertas laborales.
- Estado de cada expediente.

### 5.5 Payroll / administración

Puede consultar:

- Fichajes.
- Horas trabajadas.
- Pausas.
- Correcciones.
- Aprobaciones.
- Incidencias horarias.

Debe disponer de una acción:

> **Preparar exportación de horas para payroll**

La exportación será simulada en CSV o JSON.

### 5.6 CEO de Janitorial

Puede consultar información agregada de la división:

- Centros.
- Contratos.
- Personal.
- Cobertura.
- Calidad.
- Incidencias.
- Horas.
- Costes sintéticos.
- Formación.
- Productividad.
- Alertas.

### 5.7 Presidente de SFM Services

Debe disponer de un dashboard corporativo de alto nivel con:

- Resumen de Janitorial.
- Estado de empleados.
- Coste laboral sintético.
- Cumplimiento de servicios.
- Calidad media.
- Incidencias críticas.
- Centros en riesgo.
- Formación pendiente.
- Horas extraordinarias.
- Oportunidades de mejora.
- Futura expansión a Security, Landscape, Events y Disaster Recovery.

### 5.8 Administrador del sistema

Puede:

- Restablecer la demo.
- Cambiar la fecha simulada.
- Activar escenarios.
- Modificar parámetros.
- Consultar el audit log.
- Cambiar el rol activo.
- Ver el estado de integraciones simuladas.

---

## 6. Datos sintéticos obligatorios

Todos los datos deben ser ficticios y estar claramente identificados como datos de demostración.

### 6.1 Empleados operativos: 10 trabajadores

Crear los siguientes empleados de Janitorial:

| ID | Nombre ficticio | Puesto | Centro principal | Tipo de servicio |
|---|---|---|---|---|
| JAN-001 | Ana Torres | General Cleaner | Clínica | Limpieza general |
| JAN-002 | Luis Rivera | General Cleaner | Clínica | Limpieza general |
| JAN-003 | Carlos Díaz | General Cleaner | Colegio | Limpieza general |
| JAN-004 | Sofía Hernández | General Cleaner | Colegio | Limpieza general |
| JAN-005 | Miguel Santos | General Cleaner | Banco | Limpieza general |
| JAN-006 | Elena García | General Cleaner | Banco | Limpieza general |
| JAN-007 | Pablo Martínez | Floor & Carpet Specialist | Multicentro | Suelos y moquetas |
| JAN-008 | Diego Wilson | Floor & Carpet Specialist | Banco | Suelos y moquetas |
| JAN-009 | Laura Johnson | Relief Cleaner | Multicentro | Refuerzo y sustituciones |
| JAN-010 | Ahmed Hassan | Event Cleaning Specialist | Multicentro | Eventos de limpieza |

Cada trabajador debe mostrar:

- ID único.
- Nombre.
- Fotografía avatar sintética.
- Puesto.
- División.
- Centro.
- Supervisor.
- Estado laboral.
- Fecha de alta.
- Formación completada.
- Formación pendiente.
- Certificaciones.
- Turno.
- Último fichaje.
- Última tarea.
- Alertas activas.

### 6.2 Usuarios de gestión

Crear estos usuarios ficticios:

| ID | Usuario | Rol |
|---|---|---|
| SUP-001 | James Carter | Supervisor de Janitorial |
| QA-001 | Nina Patel | Responsable de calidad |
| HR-001 | Olivia Brown | Recursos humanos |
| PAY-001 | Mark Thompson | Payroll / Administración |
| CEO-JAN-001 | Robert Miller | CEO de Janitorial |
| PRES-001 | David Williams | Presidente de SFM Services |
| ADM-001 | Demo Admin | Administrador del sistema |

### 6.3 Centros de servicio

Crear tres centros ficticios:

#### Centro C-001 — Harborview Medical Clinic

- Sector: Healthcare.
- Tipo: Clínica médica.
- Servicio principal: Limpieza general.
- Servicio adicional: Suelos y moquetas.
- Limpieza general: lunes a viernes.
- Suelos y moquetas: dos veces por semana.
- Nivel de prioridad: alto.
- Requiere formación sanitaria específica.
- Requiere control de productos químicos.
- Requiere evidencias fotográficas.

#### Centro C-002 — Coral Gate Preparatory School

- Sector: Education.
- Tipo: Colegio.
- Servicio principal: Limpieza general.
- Servicio adicional: Suelos y moquetas.
- Limpieza general: lunes a viernes.
- Suelos y moquetas: dos veces por semana.
- Nivel de prioridad: alto.
- Requiere formación sobre menores, accesos y seguridad.
- Requiere control de horarios.

#### Centro C-003 — Atlantic Community Bank

- Sector: Banking / Commercial.
- Tipo: Oficina bancaria.
- Servicio principal: Limpieza general.
- Servicio adicional: Suelos y moquetas.
- Limpieza general: lunes a viernes.
- Suelos y moquetas: dos veces por semana.
- Nivel de prioridad: medio-alto.
- Requiere control de accesos.
- Requiere protocolo de confidencialidad.

Las ubicaciones y coordenadas de geolocalización deben ser sintéticas. No utilizar coordenadas reales de clientes.

### 6.4 Supervisor

El supervisor `SUP-001` debe estar asignado a los diez empleados operativos y a los tres centros.

Debe poder ver:

- Cobertura del día.
- Empleados presentes.
- Empleados ausentes.
- Tareas atrasadas.
- Incidencias.
- Inspecciones.
- Horas pendientes de aprobación.

### 6.5 Frecuencias de servicio

#### Limpieza general

- Se ejecuta de lunes a viernes.
- Se aplica a los tres centros.
- Cada centro debe tener tareas diarias.
- La demo debe mostrar calendario semanal.
- La frecuencia debe poder modificarse desde configuración.

#### Suelos y moquetas

- Se ejecuta dos veces por semana en cada centro.
- Debe tener una checklist diferente.
- Debe requerir maquinaria o productos específicos.
- Debe generar una inspección de calidad independiente.

#### Ejemplo obligatorio de rotación de empleado

El empleado `JAN-007 — Pablo Martínez` debe mostrar este calendario:

| Día | Asignación |
|---|---|
| Lunes | Clínica C-001 |
| Martes | Clínica C-001 |
| Miércoles | Día libre / formación / mantenimiento preventivo |
| Jueves | Colegio C-002 |
| Viernes | Colegio C-002 |

Este caso debe utilizarse para demostrar que la plataforma puede gestionar:

- Rotación entre centros.
- Dos días en un centro.
- Dos días en otro centro.
- Un día libre intermedio.
- Diferentes tareas según la ubicación.
- Control de conflictos de agenda.

El empleado `JAN-008 — Diego Wilson` cubrirá el servicio de suelos y moquetas del banco y podrá actuar como apoyo multicentro.

### 6.6 Eventos de limpieza dentro de Janitorial

Crear una subcategoría específica llamada:

> **Event Cleaning**

Crear tres eventos ficticios:

1. `EV-001 — Miami Business Expo`
2. `EV-002 — South Florida Youth Sports Festival`
3. `EV-003 — Community Arts & Food Festival`

Cada evento debe mostrar:

- Fecha.
- Lugar.
- Aforo estimado.
- Fase preevento.
- Fase durante el evento.
- Fase postevento.
- Personal asignado.
- Papeleras temporales.
- Contenedores.
- Baños portátiles.
- Estaciones de lavado de manos.
- Incidencias.
- Checklist específica.
- Informe final.

Esta subcategoría debe quedar preparada para que Events pueda convertirse en una línea de negocio independiente en el futuro.

---

## 7. Módulo de RRHH y onboarding

### 7.1 Alta de empleado

Crear una pantalla de alta con un flujo paso a paso:

1. Datos personales sintéticos.
2. Puesto.
3. División.
4. Centro.
5. Supervisor.
6. Fecha de incorporación.
7. Documentación pendiente.
8. Formación asignada.
9. Turno inicial.
10. Confirmación del expediente.

Al crear el empleado, la plataforma debe generar automáticamente:

- ID único.
- Usuario demo.
- Perfil Employee 360.
- Plan de onboarding global.
- Plan de onboarding por puesto.
- Alertas iniciales.
- Cursos obligatorios.

### 7.2 Onboarding corporativo global

Crear un itinerario de onboarding con estos módulos:

1. Bienvenida a SFM Services.
2. Historia y cultura empresarial.
3. Valores Clean, Green & Secure.
4. Normas de conducta.
5. Seguridad laboral.
6. Comunicación de incidencias.
7. Uso de la aplicación.
8. Asistencia y puntualidad.
9. Protección de información.
10. Protocolos de emergencia.

### 7.3 Onboarding por puesto

Para `General Cleaner`:

- Limpieza general.
- Uso de productos.
- Equipos de protección.
- Checklist de centro.
- Registro de fotografías.

Para `Floor & Carpet Specialist`:

- Limpieza de moquetas.
- Cuidado de suelos.
- Maquinaria.
- Productos específicos.
- Señalización de zonas húmedas.
- Mantenimiento preventivo básico.

Para `Event Cleaning Specialist`:

- Limpieza antes del evento.
- Limpieza durante el evento.
- Gestión de residuos.
- Coordinación con proveedores.
- Limpieza posterior.

Para trabajadores de la clínica:

- Limpieza en entorno sanitario.
- Limpieza terminal.
- Materiales y superficies sensibles.
- Control de contaminación.

Para trabajadores del colegio:

- Acceso a zonas restringidas.
- Seguridad de menores.
- Productos autorizados.
- Comunicación con el personal del centro.

Para trabajadores del banco:

- Confidencialidad.
- Control de accesos.
- Protocolo de objetos encontrados.
- Interacción con empleados y clientes.

---

## 8. Microformación generada con IA

Crear una biblioteca de formación con tutoriales de una duración máxima de diez minutos.

Cada tutorial debe mostrar:

- Título.
- Categoría.
- Puestos destinatarios.
- Duración.
- Nivel.
- Estado.
- Versión.
- Fecha de actualización.
- Responsable de aprobación.
- Progreso del trabajador.
- Evaluación.

### Tutoriales sintéticos obligatorios

- `TR-001 — Uso seguro de productos químicos` — 7 min.
- `TR-002 — Checklist de limpieza general` — 6 min.
- `TR-003 — Limpieza y cuidado de moquetas` — 8 min.
- `TR-004 — Limpieza de suelos VCT` — 9 min.
- `TR-005 — Limpieza en clínica médica` — 8 min.
- `TR-006 — Registro de incidencias desde el móvil` — 5 min.
- `TR-007 — Fichaje y asistencia` — 4 min.
- `TR-008 — Protocolo de limpieza en colegios` — 7 min.
- `TR-009 — Limpieza en oficinas bancarias` — 6 min.
- `TR-010 — Operativa de limpieza en eventos` — 9 min.

### Funciones de IA simuladas

Incluir un botón:

> **Generar actualización con IA**

Al pulsarlo, la demo debe mostrar un flujo simulado:

1. Seleccionar un procedimiento.
2. Generar nuevo guion.
3. Generar resumen.
4. Generar subtítulos.
5. Generar preguntas de evaluación.
6. Mostrar cambios detectados.
7. Solicitar aprobación humana.
8. Publicar nueva versión.

La IA no debe publicar automáticamente contenido sensible. Debe mostrar:

- Recomendación.
- Fuente utilizada.
- Cambios realizados.
- Riesgos detectados.
- Botón Aprobar.
- Botón Rechazar.
- Historial de versiones.

---

## 9. Employee 360

Crear una vista completa del empleado con pestañas:

1. Resumen.
2. Datos laborales.
3. Onboarding.
4. Formación.
5. Certificaciones.
6. Turnos.
7. Fichajes.
8. Tareas.
9. Incidencias.
10. Calidad.
11. Alertas.
12. Historial.

La plataforma debe demostrar que el mismo ID, por ejemplo `JAN-007`, acompaña al empleado en todo el flujo.

---

## 10. Fichaje con geolocalización simulada

Crear una experiencia móvil con dos botones principales:

- **Fichar entrada**.
- **Fichar salida**.

Al realizar el fichaje se debe mostrar:

- Hora simulada.
- Centro asignado.
- Ubicación simulada.
- Distancia al centro.
- Resultado del geofence.
- Turno.
- Estado: válido, fuera de zona o pendiente de revisión.

Crear tres escenarios interactivos:

### Escenario A — Fichaje válido

- El empleado está dentro del radio permitido.
- El fichaje queda aprobado provisionalmente.

### Escenario B — Fichaje fuera de zona

- El empleado está fuera del radio permitido.
- Se genera una alerta.
- El supervisor debe revisar el fichaje.

### Escenario C — Fichaje olvidado

- El trabajador no registra la salida.
- La plataforma genera una alerta.
- El trabajador solicita corrección.
- El supervisor aprueba o rechaza.

La demo no debe realizar seguimiento GPS continuo. La geolocalización será simulada y limitada al momento del fichaje.

---

## 11. Operaciones de Janitorial

Crear un calendario semanal y una vista diaria.

### Cada tarea debe incluir

- ID de tarea.
- Centro.
- Contrato.
- Servicio.
- Frecuencia.
- Fecha.
- Hora prevista.
- Empleado asignado.
- Supervisor.
- Estado.
- Checklist.
- Fotografías.
- Incidencias.
- Tiempo estimado.
- Tiempo real sintético.
- Coste sintético.

### Estados de tarea

- Programada.
- En curso.
- Completada.
- Pendiente de revisión.
- Incidencia abierta.
- Reprogramada.
- Cancelada.

### Acciones interactivas

- Iniciar tarea.
- Completar tarea.
- Añadir fotografía.
- Crear incidencia.
- Solicitar apoyo.
- Reasignar trabajador.
- Marcar como pendiente de revisión.
- Cerrar tarea.

---

## 12. Checklists diferenciadas

### Checklist de limpieza general

- Entrada y recepción.
- Zonas comunes.
- Baños.
- Despachos.
- Superficies de contacto.
- Papeleras.
- Suelos.
- Materiales repuestos.
- Revisión final.

### Checklist de suelos y moquetas

- Inspección inicial.
- Identificación de manchas.
- Preparación de zona.
- Señalización.
- Aplicación de producto.
- Uso de máquina.
- Secado.
- Retirada de residuos.
- Fotografía final.

### Checklist de evento

- Preapertura.
- Baños.
- Zonas de acceso.
- Papeleras.
- Pasillos.
- Zonas de comida.
- Reposición durante el evento.
- Retirada posterior.
- Informe final.

---

## 13. Incidencias y calidad

Crear un módulo de incidencias con estas categorías:

- Limpieza.
- Suelos.
- Moquetas.
- Productos.
- Equipos.
- Personal.
- Fichajes.
- Acceso.
- Seguridad.
- Cliente.
- Evento.
- Emergencia.

Cada incidencia debe contener:

- ID.
- Centro.
- Contrato.
- Trabajador.
- Supervisor.
- Fecha.
- Prioridad.
- Descripción.
- Fotografía.
- Responsable.
- Fecha límite.
- Estado.
- Acción correctiva.
- Fecha de cierre.

### Prioridades

- Baja.
- Media.
- Alta.
- Crítica.

### IA para incidencias

Crear un asistente que pueda:

- Resumir la incidencia.
- Clasificarla.
- Proponer prioridad.
- Recomendar responsable.
- Redactar respuesta al cliente.
- Detectar reincidencias.
- Proponer acción correctiva.

La interfaz debe mostrar siempre que la IA **propone** y que un usuario autorizado debe aprobar.

---

## 14. Dashboard de calidad

Crear indicadores sintéticos:

- Inspecciones realizadas.
- Inspecciones aprobadas.
- Deficiencias abiertas.
- Acciones correctivas pendientes.
- Tiempo medio de resolución.
- Puntuación por centro.
- Puntuación por supervisor.
- Incidencias repetidas.
- Cumplimiento de checklist.

Crear al menos un caso de reincidencia en el que la IA indique:

> “La Clínica C-001 presenta tres incidencias similares relacionadas con baños durante las últimas dos semanas. Se recomienda revisar frecuencia, cobertura y disponibilidad de consumibles.”

Esta recomendación debe poder aprobarse y convertirse en una tarea.

---

## 15. Payroll y aprobación de horas

Crear un flujo simulado:

1. El empleado ficha.
2. El sistema calcula horas sintéticas.
3. El supervisor revisa.
4. El supervisor aprueba o solicita corrección.
5. Payroll consulta las horas aprobadas.
6. Se genera un resumen.
7. Se exporta CSV o JSON.

La exportación debe incluir:

- Employee ID.
- Nombre.
- División.
- Centro.
- Fecha.
- Entrada.
- Salida.
- Pausas.
- Horas ordinarias.
- Horas extraordinarias sintéticas.
- Estado de aprobación.
- Supervisor aprobador.

Mostrar una advertencia visible:

> **Esta demo prepara horas para una futura integración. No calcula nóminas legales ni sustituye un sistema payroll.**

---

## 16. Dashboard del CEO de Janitorial

Crear un dashboard específico con navegación lateral, filtros y tarjetas KPI.

### KPI obligatorios

- 10 empleados operativos.
- 3 centros activos.
- 15 servicios generales semanales.
- 6 servicios de suelo/moqueta semanales.
- 96 % de tareas completadas.
- 93 % de inspecciones aprobadas.
- 2 incidencias abiertas.
- 5 formaciones pendientes.
- 1 fichaje pendiente de revisión.
- Coste laboral mensual sintético.
- Horas extraordinarias sintéticas.

### Visualizaciones

- Cumplimiento semanal.
- Calidad por centro.
- Incidencias por categoría.
- Horas por centro.
- Formación por estado.
- Tendencia de incidencias.
- Distribución de trabajadores.

Todos los gráficos deben utilizar datos sintéticos coherentes con las tablas.

---

## 17. Dashboard global del presidente

Crear una vista corporativa superior.

### Janitorial — activo en la demo

Mostrar información detallada de:

- Personal.
- Centros.
- Calidad.
- Incidencias.
- Formación.
- Horas.
- Costes.
- Riesgos.

### Security — categoría preparada

Mostrar como módulo futuro con estado “Próximamente”:

- Agentes.
- Puestos.
- Patrullas.
- Licencias.
- Incidencias.
- Fire Watch.
- Informes.

### Landscape — categoría preparada

- Riego.
- Árboles.
- Poda.
- Césped.
- Plagas.
- Maquinaria.
- Rutas.

### Events — categoría preparada

- Eventos.
- Aforo.
- Limpieza preevento.
- Limpieza durante el evento.
- Limpieza posterior.
- Recursos.

### Disaster Recovery — categoría preparada

- Emergencias.
- Camiones.
- Proveedores.
- Residuos.
- Zonas afectadas.
- Evidencias.
- Documentación FEMA.

El presidente debe poder entender que todas las divisiones utilizarán el mismo núcleo de plataforma, pero con configuraciones específicas.

---

## 18. Asistente de IA ejecutivo

Crear un panel llamado:

> **SFM AI Operations Copilot**

Debe responder sobre los datos de la demo, no mediante respuestas genéricas.

Preguntas de ejemplo:

- ¿Qué centros tienen más incidencias?
- ¿Qué empleados tienen formación pendiente?
- ¿Qué tareas están atrasadas?
- ¿Qué fichajes necesitan revisión?
- ¿Qué centro presenta mayor riesgo operativo?
- ¿Cuántas horas se han trabajado esta semana?
- ¿Qué supervisor necesita apoyo?
- ¿Qué acción debería priorizar el CEO?

Cada respuesta debe incluir:

- Resumen.
- Datos que justifican la respuesta.
- Riesgo o impacto.
- Recomendación.
- Acción propuesta.
- Usuario que debe aprobarla.

Ejemplo:

> **Recomendación:** reforzar la cobertura de la Clínica C-001 el jueves.  
> **Motivo:** dos incidencias abiertas, una formación sanitaria pendiente y una ausencia prevista.  
> **Aprobación requerida:** Supervisor de Janitorial.

Implementar la IA inicialmente con reglas locales y respuestas deterministas. No utilizar llamadas externas ni claves reales en la demo.

---

## 19. Alertas personalizadas

Crear un centro de notificaciones.

### Trabajador

- Curso pendiente.
- Cambio de turno.
- Fichaje olvidado.
- Incidencia asignada.
- Nueva instrucción.

### Supervisor

- Ausencia.
- Fichaje fuera de zona.
- Tarea atrasada.
- Incidencia crítica.
- Formación no completada.

### RRHH

- Nuevo empleado pendiente de onboarding.
- Documento pendiente.
- Certificación próxima a vencer.
- Curso obligatorio no completado.

### CEO

- Centro en riesgo.
- Aumento de incidencias.
- Horas extraordinarias.
- Caída de calidad.
- Costes por encima del objetivo.

Las alertas deben poder marcarse como:

- Pendientes.
- En revisión.
- Resueltas.
- Ignoradas con motivo.

---

## 20. Auditoría y trazabilidad

Crear un audit log funcional para la demo.

Registrar:

- Fecha y hora.
- Usuario.
- Rol.
- Acción.
- Módulo.
- Registro afectado.
- Estado anterior.
- Estado nuevo.
- Motivo.

Ejemplos:

- `JAN-007` fichó entrada.
- `SUP-001` aprobó una corrección horaria.
- `QA-001` rechazó una fotografía.
- `HR-001` publicó una nueva versión formativa.
- `CEO-JAN-001` aprobó una recomendación de IA.

La arquitectura debe contemplar conceptualmente:

- `tenant_id`.
- `actor_id`.
- `request_id`.
- `trace_id`.
- `created_at`.
- `updated_at`.

Aunque la demo utilice datos locales, la estructura debe poder evolucionar posteriormente a una plataforma multiempresa y multiusuario.

---

## 21. Navegación y experiencia de usuario

### Estilo visual

- SaaS moderno.
- Interfaz oscura de alto contraste.
- Diseño profesional y ejecutivo.
- Navegación lateral.
- Buscador global.
- Filtros por centro, servicio, empleado, supervisor y estado.
- Tarjetas KPI.
- Tablas legibles.
- Gráficos sencillos.
- Estados mediante colores.
- Responsive para móvil, tablet y escritorio.

### Navegación principal

1. Inicio.
2. Modo presentación.
3. Dashboard CEO.
4. Janitorial.
5. RRHH.
6. Employee 360.
7. Onboarding.
8. Formación.
9. Turnos y fichajes.
10. Operaciones.
11. Calidad.
12. Incidencias.
13. Payroll.
14. Informes.
15. Integraciones.
16. Audit log.
17. Configuración.

### Modo presentación

Crear un botón visible:

> **Iniciar recorrido ejecutivo**

El modo presentación debe guiar al usuario por este recorrido:

1. Dashboard del presidente.
2. Selección de Janitorial.
3. CEO de Janitorial.
4. Incidencia en la Clínica C-001.
5. Supervisor revisando la incidencia.
6. Perfil Employee 360 de `JAN-007`.
7. Formación y onboarding.
8. Fichaje geolocalizado simulado.
9. Checklist de suelos y moquetas.
10. Informe para el cliente.
11. Horas aprobadas para payroll.
12. Regreso al dashboard del presidente.

Cada paso debe poder abrirse también manualmente.

---

## 22. Informe para el cliente

Crear una pantalla de generación de informe.

El informe debe incluir:

- Nombre sintético del centro.
- Periodo.
- Servicios realizados.
- Personal asignado.
- Tareas completadas.
- Inspecciones.
- Incidencias.
- Fotografías sintéticas.
- Acciones correctivas.
- Puntuación de calidad.
- Firma o aprobación simulada del supervisor.

Añadir botones:

- Vista previa.
- Imprimir.
- Descargar PDF mediante impresión del navegador.
- Descargar JSON.
- Descargar CSV.

---

## 23. Modelo de datos conceptual

Aunque la demo utilice `localStorage`, estructurar los datos como si posteriormente fueran tablas de base de datos.

Entidades mínimas:

- `organizations`.
- `divisions`.
- `users`.
- `employees`.
- `roles`.
- `positions`.
- `sites`.
- `clients`.
- `contracts`.
- `service_catalog`.
- `service_frequencies`.
- `schedules`.
- `assignments`.
- `tasks`.
- `checklists`.
- `checklist_items`.
- `time_entries`.
- `geofence_events`.
- `training_courses`.
- `training_versions`.
- `training_enrollments`.
- `certifications`.
- `incidents`.
- `inspections`.
- `corrective_actions`.
- `reports`.
- `payroll_exports`.
- `alerts`.
- `ai_recommendations`.
- `approvals`.
- `audit_events`.

No codificar los datos directamente dentro de las vistas. Las pantallas deben leer y modificar un estado centralizado.

---

## 24. Reglas de negocio obligatorias

Implementar estas reglas en la demo:

1. Un empleado debe tener un ID único.
2. Un empleado pertenece a una división.
3. Un empleado tiene un puesto.
4. Un puesto determina formación obligatoria.
5. Un centro determina servicios y frecuencias.
6. La limpieza general se programa de lunes a viernes.
7. Suelos y moquetas se programan dos veces por semana.
8. Un trabajador puede estar asignado a varios centros.
9. El sistema debe detectar conflictos de horario.
10. Un fichaje fuera del geofence genera alerta.
11. Una incidencia crítica debe escalar al supervisor.
12. Una tarea no puede cerrarse sin checklist mínima.
13. Una inspección rechazada crea una acción correctiva.
14. Las horas pasan a payroll solo después de aprobación.
15. La IA propone; una persona autorizada aprueba.
16. Toda acción importante crea un registro de auditoría.
17. El CEO ve datos agregados y no debe modificar registros laborales delicados.
18. El presidente ve el resumen corporativo.

---

## 25. Escenarios de demostración obligatorios

### Escenario 1 — Nueva incorporación

Crear un nuevo trabajador ficticio y mostrar:

- Alta.
- ID.
- Onboarding global.
- Onboarding por puesto.
- Curso pendiente.
- Asignación a un centro.
- Turno inicial.

### Escenario 2 — Formación actualizada con IA

- Seleccionar un tutorial.
- Modificar un procedimiento.
- Generar versión nueva con IA simulada.
- Revisar cambios.
- Aprobar.
- Mostrar que la nueva versión se asigna al puesto correspondiente.

### Escenario 3 — Fichaje correcto

- Entrar como trabajador.
- Fichar entrada.
- Mostrar ubicación simulada válida.
- Completar una tarea.
- Fichar salida.

### Escenario 4 — Incidencia operativa

- Registrar un derrame o problema de limpieza.
- La IA clasifica la incidencia.
- El supervisor recibe una alerta.
- Se asigna una acción correctiva.
- Calidad verifica la resolución.

### Escenario 5 — Fichaje fuera de zona

- Simular una ubicación incorrecta.
- Generar alerta.
- Solicitar explicación.
- Aprobar o rechazar la corrección.
- Registrar todo en audit log.

### Escenario 6 — Día de rotación de Pablo

- Mostrar el calendario de `JAN-007`.
- Lunes y martes en Clínica.
- Miércoles libre/formación.
- Jueves y viernes en Colegio.
- Mostrar ausencia de conflictos.

### Escenario 7 — Informe y payroll

- Completar servicios.
- Aprobar inspección.
- Generar informe para el cliente.
- Aprobar horas.
- Exportar CSV.

### Escenario 8 — Vista del presidente

- Regresar al dashboard corporativo.
- Mostrar cómo la incidencia, la calidad, la formación y las horas aparecen resumidas para dirección.

---

## 26. Buenas prácticas de IA y seguridad

La demo debe representar estas reglas:

- No utilizar datos personales reales.
- No incluir API keys en el código.
- No simular una nómina definitiva.
- No realizar seguimiento GPS continuo.
- No permitir que la IA tome decisiones laborales autónomas.
- Mostrar fuente y motivo de cada recomendación.
- Solicitar aprobación humana en acciones sensibles.
- Mantener historial de versiones formativas.
- Mantener audit log.
- Separar claramente roles y permisos.
- Preparar el modelo para aislamiento por organización.
- Diseñar la futura base de datos con `tenant_id`.
- Evitar almacenar más información de la necesaria.

La demo debe poder convertirse posteriormente en un MVP conectado con backend, autenticación real, base de datos, almacenamiento seguro, APIs, integraciones y control de acceso en servidor.

---

## 27. Criterios de aceptación

La demo se considerará aceptada cuando:

1. Pueda ejecutarse sin configuración compleja.
2. Muestre claramente que todos los datos son sintéticos.
3. Permita cambiar entre los roles definidos.
4. Existan diez empleados operativos ficticios.
5. Existan tres centros ficticios.
6. Exista un supervisor para los tres centros.
7. La limpieza general aparezca de lunes a viernes.
8. Suelos y moquetas aparezcan dos veces por semana.
9. Se visualice la rotación especial de `JAN-007`.
10. Existan onboarding global y onboarding por puesto.
11. Existan al menos diez tutoriales de menos de diez minutos.
12. Se pueda simular la actualización de un tutorial con IA.
13. Se pueda simular el fichaje de entrada y salida.
14. Se pueda simular geolocalización válida y no válida.
15. Se puedan crear y resolver incidencias.
16. Exista control de calidad.
17. Exista Employee 360.
18. Exista aprobación de horas para payroll.
19. Se pueda exportar un CSV o JSON.
20. Exista dashboard de Janitorial.
21. Exista dashboard del presidente.
22. Existan categorías preparadas para Security, Landscape, Events y Disaster Recovery.
23. Exista asistente de IA contextual.
24. Exista audit log.
25. Exista modo de recorrido ejecutivo.
26. La interfaz sea responsive.
27. Se pueda restablecer la demo.
28. No se confundan datos simulados con datos reales.

---

## 28. Entregables solicitados al equipo

Entregar:

1. Demo ejecutable.
2. Código fuente.
3. Archivo `README.md`.
4. Documento de arquitectura.
5. Documento de modelo de datos.
6. Lista de funcionalidades implementadas.
7. Lista de funcionalidades simuladas.
8. Lista de funcionalidades reservadas para producción.
9. Guion de demostración ante el presidente.
10. Datos sintéticos separados o claramente identificados.
11. Capturas de las pantallas principales.
12. Registro de decisiones técnicas.
13. Relación de riesgos y limitaciones.
14. Recomendación de la siguiente fase.

---

## 29. Guion ejecutivo recomendado

La demo debe poder presentarse en aproximadamente 15 minutos:

### Minuto 1 — Contexto

“SFM opera con personas, centros, servicios, calidad, incidencias y documentación. La plataforma conecta todos esos elementos.”

### Minutos 2-4 — RRHH

Crear un empleado, asignarle ID, onboarding y formación.

### Minutos 5-7 — Operación

Asignar turno, fichaje geolocalizado simulado, checklist y tarea.

### Minutos 8-10 — Calidad

Registrar incidencia, generar recomendación IA, revisar y cerrar acción correctiva.

### Minutos 11-12 — Cliente y payroll

Generar informe y exportar horas aprobadas.

### Minutos 13-15 — Dirección

Mostrar cómo toda la actividad llega al CEO de Janitorial y al presidente.

### Mensaje de cierre

> “No estamos presentando una aplicación aislada. Estamos mostrando el primer módulo de un sistema operativo inteligente para toda SFM Services.”

---

## 30. Evolución posterior

Una vez validado el MVP de Janitorial, conservar el núcleo común y añadir paquetes específicos:

### Security

- Agentes.
- Puestos.
- Patrullas.
- Licencias.
- Formación.
- Fire Watch.
- Incidencias.
- Control de accesos.

### Landscape

- Riego.
- Árboles.
- Poda.
- Césped.
- Plagas.
- Maquinaria.
- Rutas.

### Events

- Aforo.
- Recursos.
- Pre-evento.
- Durante el evento.
- Post-evento.
- Residuos.
- Informes.

### Disaster Recovery

- Activación de emergencia.
- Zonas afectadas.
- Proveedores.
- Camiones.
- Residuos.
- Fotografías.
- Documentación FEMA.
- Costes.

La regla estratégica será:

> **Mismo núcleo tecnológico, diferentes paquetes operativos de conocimiento, objetivos, métricas, checklists y automatizaciones.**

---

## 31. Resultado que debe conseguir la demo

Al finalizar el recorrido, el presidente debe comprender que SFM Operations Intelligence puede convertirse progresivamente en:

- Sistema de onboarding.
- Plataforma de formación.
- Employee 360.
- Sistema de fichaje.
- Centro de operaciones.
- Sistema de calidad.
- Gestor de incidencias.
- Generador de informes.
- Capa de integración con payroll.
- Panel ejecutivo de Janitorial.
- Centro corporativo de decisión.
- Plataforma multiservicio para toda SFM.

La demo debe ser visual, interactiva, coherente, fácil de presentar y suficientemente realista para provocar una conversación sobre un piloto controlado en la división de Janitorial.

