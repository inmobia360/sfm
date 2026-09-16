import assert from 'node:assert/strict';
import { approveCommercialCommitment, prepareJanitorialOffer } from '../src/commercial-rules.mjs';

const offer = prepareJanitorialOffer({ contractId: 'C-001', client: 'Harborview', amount: 12500 });
assert.equal(offer.status, 'DRAFT'); assert.equal(offer.preparedBy, 'JANITORIAL');
assert.equal(approveCommercialCommitment(offer).approvedBy, 'INFANTE');
assert.throws(() => prepareJanitorialOffer({ contractId: 'C-001', client: 'Other', divisionId: 'SECURITY', amount: 1 }), /OFFER_DATA_INVALID/);
assert.throws(() => approveCommercialCommitment(offer, 'JANITORIAL'), /CORPORATE_APPROVAL_REQUIRED/);
console.log('COMMERCIAL RULES TEST OK · oferta · presupuesto · aprobación INFANTE');
