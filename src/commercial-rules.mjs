export function prepareJanitorialOffer({ contractId, client, divisionId = 'JANITORIAL', amount }) {
  if (!contractId || !client || divisionId !== 'JANITORIAL' || !Number.isFinite(amount) || amount < 0) throw new Error('OFFER_DATA_INVALID');
  return { contractId, client, divisionId, amount, status: 'DRAFT', preparedBy: 'JANITORIAL' };
}

export function approveCommercialCommitment(offer, approver = 'INFANTE') {
  if (offer?.status !== 'DRAFT') throw new Error('OFFER_NOT_DRAFT');
  if (approver !== 'INFANTE') throw new Error('CORPORATE_APPROVAL_REQUIRED');
  return { ...offer, status: 'APPROVED', approvedBy: approver };
}
