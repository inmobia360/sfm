/* Estado central de la demo. Se mantiene separado de las vistas para permitir
   sustituir localStorage por una API sin rehacer la interfaz. */
window.SFM_DEMO_KEY = 'sfm-demo-state-v1';
window.SFM_INITIAL = {
  employees: [
    ['JAN-001','Ana Torres','General Cleaner','C-001'],['JAN-002','Luis Rivera','General Cleaner','C-001'],['JAN-003','Carlos Díaz','General Cleaner','C-002'],['JAN-004','Sofía Hernández','General Cleaner','C-002'],['JAN-005','Miguel Santos','General Cleaner','C-003'],['JAN-006','Elena García','General Cleaner','C-003'],['JAN-007','Pablo Martínez','Floor & Carpet Specialist','MULTI'],['JAN-008','Diego Wilson','Floor & Carpet Specialist','C-003'],['JAN-009','Laura Johnson','Relief Cleaner','MULTI'],['JAN-010','Ahmed Hassan','Event Cleaning Specialist','MULTI']
  ].map(([id,name,position,site]) => ({id,name,position,site,status:'Activo'})),
  sites: [
    {id:'C-001',name:'Harborview Medical Clinic',sector:'Healthcare',quality:91},
    {id:'C-002',name:'Coral Gate Preparatory School',sector:'Education',quality:97},
    {id:'C-003',name:'Atlantic Community Bank',sector:'Banking',quality:95}
  ],
  services: [
    {id:'SVC-GEN',name:'Limpieza general',frequency:'Lunes a viernes'},
    {id:'SVC-FLOOR',name:'Suelos y moquetas',frequency:'Dos veces por semana'},
    {id:'SVC-EVENT',name:'Event Cleaning',frequency:'Por evento'}
  ],
  tasks: [
    {id:'T-1042',site:'C-001',service:'Limpieza general',employee:'JAN-001',status:'Completada'},
    {id:'T-1043',site:'C-001',service:'Suelos y moquetas',employee:'JAN-007',status:'Pendiente de revisión'},
    {id:'T-1044',site:'C-002',service:'Limpieza general',employee:'JAN-003',status:'En curso'},
    {id:'T-1045',site:'C-003',service:'Limpieza general',employee:'JAN-005',status:'Programada'}
  ],
  incidents: [
    {id:'INC-021',site:'C-001',category:'Limpieza',priority:'Alta',title:'Reincidencia en baños',status:'Abierta'},
    {id:'INC-022',site:'C-003',category:'Fichajes',priority:'Media',title:'Fichaje fuera de zona de JAN-008',status:'En revisión'}
  ],
  audit: [
    {at:'2026-09-16 08:02',actor:'JAN-007',action:'Fichó entrada',module:'Time & Attendance'},
    {at:'2026-09-16 09:14',actor:'QA-001',action:'Abrió INC-021',module:'Calidad'}
  ]
};
window.sfmLoad = () => JSON.parse(localStorage.getItem(window.SFM_DEMO_KEY) || JSON.stringify(window.SFM_INITIAL));
window.sfmReset = () => { localStorage.setItem(window.SFM_DEMO_KEY, JSON.stringify(window.SFM_INITIAL)); return sfmLoad(); };
window.sfmCommit = (state, actor, action, module, detail='') => {
  state.audit.push({at:new Date().toISOString(),actor,action,module,detail});
  localStorage.setItem(window.SFM_DEMO_KEY, JSON.stringify(state));
  return state;
};
window.sfmCreateIncident = (state, payload) => {
  const incident={id:`INC-${String(state.incidents.length+23).padStart(3,'0')}`,status:'Abierta',...payload};
  state.incidents.push(incident);
  return sfmCommit(state,payload.actor||'DEMO-USER','Creó '+incident.id,'Incidencias',incident.title);
};
window.sfmApproveHours = (state, employeeId, approver='SUP-001') => sfmCommit(state,approver,`Aprobó horas de ${employeeId}`,'Payroll');
window.sfmGeofence = (distance, radius=100) => ({distance,radius,valid:distance<=radius,status:distance<=radius?'Válido':'Fuera de zona'});
