import assert from 'node:assert/strict';
import test from 'node:test';
import { updateRequest, visibleRequests } from './workflow.mjs';

const request = Object.freeze({ id: 'request-a', teamId: 'team-a', status: 'draft', revision: 0 });
const organizer = { id: 'actor-a', teamId: 'team-a', role: 'organizer' };
const reviewer = { id: 'actor-b', teamId: 'team-a', role: 'reviewer' };
const outsider = { id: 'actor-c', teamId: 'team-b', role: 'reviewer' };

test('submits a request and records the approved revision', () => {
  const submission = updateRequest(request, organizer, { action: 'submit', revision: 0 });
  assert.deepEqual(submission.request, { ...request, status: 'in_review', revision: 1 });
  assert.equal(request.status, 'draft');
  const approval = updateRequest(submission.request, reviewer, { action: 'approve', revision: 1 });
  assert.equal(approval.request.status, 'approved');
  assert.deepEqual(approval.event, {
    requestId: 'request-a', actorId: 'actor-b', action: 'approve', revision: 2,
  });
});

test('limits visibility and changes to the actor’s team', () => {
  const otherRequest = { ...request, id: 'request-b', teamId: 'team-b' };
  assert.deepEqual(visibleRequests([request, otherRequest], reviewer), [request]);
  assert.deepEqual(updateRequest(request, outsider, { action: 'approve', revision: 0 }),
    { ok: false, reason: 'forbidden' });
});

test('rejects invalid roles, revisions, states and actions', () => {
  assert.equal(updateRequest(request, organizer, { action: 'approve', revision: 0 }).reason, 'forbidden');
  assert.equal(updateRequest(request, organizer, { action: 'submit', revision: 1 }).reason, 'stale_revision');
  assert.equal(updateRequest(request, reviewer, { action: 'approve', revision: 0 }).reason, 'invalid_transition');
  assert.equal(updateRequest(request, reviewer, { action: 'constructor', revision: 0 }).reason, 'unknown_action');
});
