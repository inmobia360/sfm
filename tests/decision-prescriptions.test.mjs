import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

if (typeof globalThis.window === 'undefined') {
  globalThis.window = globalThis;
}
const fakeStorage = {};
globalThis.localStorage = {
  getItem: k => fakeStorage[k] || null,
  setItem: (k, v) => { fakeStorage[k] = v; },
  removeItem: k => { delete fakeStorage[k]; }
};

await import('../data.js');

const state = window.sfmLoad();

assert.ok(Array.isArray(state.prescriptions), 'Debe existir un arreglo de prescripciones');
assert.ok(state.prescriptions.length >= 2, 'Debe haber al menos 2 prescripciones ejecutivas');

const p1 = state.prescriptions[0];
assert.ok(p1.id && p1.title && p1.target, 'La prescripción debe tener id, título y objetivo');
assert.ok(p1.recommendation, 'Debe incluir recomendación explícita para Infante');
assert.ok(p1.coi, 'Debe incluir Coste de la Inacción CoI');
assert.ok(p1.coi.financial && p1.coi.operational && p1.coi.workforce, 'CoI debe ser multidimensional');
assert.equal(typeof p1.coi.financialRiskEur, 'number', 'El riesgo financiero debe ser númerico');
assert.ok(p1.provenance, 'Debe especificar origen de los datos');
assert.ok(p1.confidenceScore >= 80, 'Score de confianza debe ser >= 80%');
assert.ok(p1.slaTimerMinutes > 0, 'Debe incluir temporizador de SLA');

assert.ok(state.trends, 'Debe existir modelo de tendencias');
assert.ok(Array.isArray(state.trends.qualityHistory), 'Histórico de calidad a 30 días');
assert.ok(state.trends.absenteeismDelta, 'Variación de absenteismo');
assert.ok(state.trends.firstTimeFixRate, 'First-time fix rate');

assert.ok(Array.isArray(state.decisionLedger), 'Debe existir el Decision Ledger');
assert.ok(state.decisionLedger.length >= 2, 'Debe incluir histórico de decisiones tomadas');
const d1 = state.decisionLedger[0];
assert.ok(d1.decision && d1.actor && d1.estimatedImpact && d1.measuredOutcome, 'GComparativa estimado vs real');
assert.ok(d1.netSavingsEur > 0, 'Debe cuantificar ahorro neto');

const beforeLedger = state.decisionLedger.length;
window.sfmAdoptPrescription(state, p1.id, 'INFANTE');
assert.equal(state.decisionLedger.length, beforeLedger + 1, 'Adoptar prescripción debe añadirla al ledger');
assert.equal(p1.status, 'Adoptada', 'La prescripción debe marcarse como adoptada');

console.log('DECISION PRESCRIPTIONS TEST OK · CoI multidimensional · SLA timer · Provenance · Ledger');