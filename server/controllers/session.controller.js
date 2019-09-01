import { Session, sessions } from '../models/session.model';
import { user, users } from "../models/user.model";

export function createsession(req, res) {
  const session = new Session(sessions.length + 1, req.body.mentorId,
    req.user.id, req.body.questions, req.user.email);
  sessions.push(session);

  return res.status(201).send({
    data: {
      status: 201,
      message: 'session created successfully',
      session,
    },
  });
}