import { evaluateApproval } from './approval-gate.mjs';
import { authorizeRequest } from './request-authorization.mjs';

export function prepareGovernedAction({ context, action, resource, intent, decision } = {}) {
  const authorization = authorizeRequest({ context, action, resource });
  if (authorization.decision === 'DENY') return { status: 'DENIED', authorization };
  const approval = evaluateApproval({ intent, requiresHumanApproval: authorization.decision === 'ESCALATE' }, decision);
  if (approval.status === 'WAITING_APPROVAL') return { status: 'PENDING_APPROVAL', authorization, approval };
  if (approval.status === 'REJECTED') return { status: 'REJECTED', authorization, approval };
  return { status: 'READY', authorization, approval };
}
