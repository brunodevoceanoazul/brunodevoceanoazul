const transitions = Object.freeze({
  submit: { role: 'organizer', from: 'draft', to: 'in_review' },
  approve: { role: 'reviewer', from: 'in_review', to: 'approved' },
  return: { role: 'reviewer', from: 'in_review', to: 'draft' },
});

export function visibleRequests(requests, actor) {
  return requests.filter(request => request.teamId === actor.teamId);
}

export function updateRequest(request, actor, command) {
  if (request.teamId !== actor.teamId) return { ok: false, reason: 'forbidden' };

  const rule = Object.hasOwn(transitions, command.action) && transitions[command.action];
  if (!rule) return { ok: false, reason: 'unknown_action' };
  if (actor.role !== rule.role) return { ok: false, reason: 'forbidden' };
  if (request.revision !== command.revision) return { ok: false, reason: 'stale_revision' };
  if (request.status !== rule.from) return { ok: false, reason: 'invalid_transition' };

  const revision = request.revision + 1;

  return {
    ok: true,
    request: { ...request, status: rule.to, revision },
    event: { requestId: request.id, actorId: actor.id, action: command.action, revision },
  };
}
