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
  prescriptions: [
    {
      id: 'RX-101',
      title: 'Cobertura urgente de turno en Harborview (C-001)',
      target: 'C-001 · Harborview Medical Clinic',
      urgency: 'Crítica',
      slaTimerMinutes: 38,
      provenance: 'Biometría ZKTeco + Sistema de Cuadrantes + HR Portal',
      confidenceScore: 96,
      recommendation: 'Reasignar de inmediato 2 especialistas del retén polivalente de Plaza Central y activar 1 guardia de retén de fin de semana para garantizar apertura de quirófanos y consultas.',
      suggestedAction: 'Aprobar rebalanceo y refuerzo de guardia (Coste 280 €)',
      coi: {
        financialRiskEur: 1850,
        financial: 'Penalización contractual de 1.850 € por retraso en apertura del área sanitaria a las 06:00.',
        operational: '120 horas/hombre de servicio en riesgo; sobrecarga del 35% sobre la brigada reducida.',
        workforce: 'Riesgo inminente de fatiga del operario y potencial no conformidad preventiva en prevención laboral.'
      },
      status: 'Pendiente'
    },
    {
      id: 'RX-102',
      title: 'Validación de desvío de horas extra en C-003',
      target: 'C-003 · Atlantic Community Bank',
      urgency: 'Media',
      slaTimerMinutes: 120,
      provenance: 'Fichaje Geofence + Aprobación Supervisor SUP-001',
      confidenceScore: 92,
      recommendation: 'Autorizar abono compensatorio de 2.5 h extra a JAN-008 por cierre extraordinario de bóveda solicitado por gerencia bancaria.',
      suggestedAction: 'Aprobar compensación extraordinaria (Coste 65 €)',
      coi: {
        financialRiskEur: 420,
        financial: 'Retención de certificación mensual del cliente e interés por discrepancia en factura.',
        operational: 'Retraso administrativo en el ciclo preparatorio de nómina/payroll.',
        workforce: 'Desmotivación del especialista de moquetas y fricción sindical por retraso en devengo.'
      },
      status: 'Pendiente'
    }
  ],
  trends: {
    qualityHistory: [92.1, 92.8, 93.4, 93.0, 93.9, 94.3],
    qualityDelta: '+2.2% (30d)',
    absenteeismRate: '2.8%',
    absenteeismDelta: '-0.6% vs mes anterior',
    firstTimeFixRate: '94.8%',
    activeContractsEbitdaRiskEur: 2270
  },
  decisionLedger: [
    {
      id: 'DEC-089',
      date: '2026-09-12 11:30',
      actor: 'INFANTE',
      decision: 'Aprobación de refuerzo extraordinario ante desinfección preventiva en C-002',
      costEur: 320,
      estimatedImpact: 'Evitar clausura de aulas y penalización SLA de 2.400 €',
      measuredOutcome: 'Apertura a tiempo sin incidencias. Cumplimiento SLA 100%. Auditoría Sanitaria superada.',
      netSavingsEur: 2080,
      status: 'Verificada a 7 días'
    },
    {
      id: 'DEC-084',
      date: '2026-09-08 16:45',
      actor: 'INFANTE',
      decision: 'Reasignación de barredora de alta capacidad a zona bancaria C-003',
      costEur: 110,
      estimatedImpact: 'Reducir tiempo de ciclo de suelos en 4.5 horas y mitigar riesgo de caída',
      measuredOutcome: 'Reducción de 5.2 horas efectivas. Cero no conformidades en auditoría cliente.',
      netSavingsEur: 540,
      status: 'Verificada a 14 días'
    }
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
window.sfmAdoptPrescription = (state, prescriptionId, actor='INFANTE') => {
  const rx = (state.prescriptions || []).find(p => p.id === prescriptionId);
  if (!rx) return null;
  rx.status = 'Adoptada';
  const entry = {
    id: `DEC-${String((state.decisionLedger?.length || 0) + 90).padStart(3, '0')}`,
    date: new Date().toISOString().replace('T', ' ').slice(0, 16),
    actor,
    decision: rx.title + ' — ' + rx.recommendation,
    costEur: 280,
    estimatedImpact: `Mitigar Coste de Inacción: ${rx.coi?.financialRiskEur || 1850} € en riesgo evitado`,
    measuredOutcome: 'Acción prescrita en curso. Operario notificado y cobertura confirmada.',
    netSavingsEur: (rx.coi?.financialRiskEur || 1850) - 280,
    status: 'Adoptada en vivo'
  };
  state.decisionLedger = state.decisionLedger || [];
  state.decisionLedger.unshift(entry);
  sfmCommit(state, actor, `Adoptó prescripción ${rx.id}`, 'DSS Governance', rx.title);
  if (typeof window.sfmPublish === 'function') window.sfmPublish(state);
  return entry;
};
window.sfmGeofence = (distance, radius=100) => ({distance,radius,valid:distance<=radius,status:distance<=radius?'Válido':'Fuera de zona'});
window.sfmSubscribe = (onChange) => {
  const channel = 'BroadcastChannel' in window ? new BroadcastChannel(window.SFM_DEMO_KEY) : null;
  const receive = () => onChange(window.sfmLoad());
  window.addEventListener('storage', receive);
  channel?.addEventListener('message', receive);
  return () => { window.removeEventListener('storage', receive); channel?.close(); };
};
window.sfmPublish = (state) => {
  localStorage.setItem(window.SFM_DEMO_KEY, JSON.stringify(state));
  if ('BroadcastChannel' in window) new BroadcastChannel(window.SFM_DEMO_KEY).postMessage({updatedAt:Date.now()});
  return state;
};
