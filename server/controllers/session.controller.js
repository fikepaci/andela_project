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
export function acceptsession(req, res) {
    const { sessionId } = req.params;
    const index = sessions.find((u) => u.sessionId === parseInt(sessionId, 10));
  
    if (index > -1) {
      sessions[index].status = 'accepted';
  
      return res.status(200).send({
        status: 200,
        message: 'session accepted by mentor',
        sessionId: sessions[index].sessionId,
      });
    }
  
    return res.status(200).send({
      status: 200,
      message: 'Invalid session id',
    });
  }
  export function rejectsession(req, res) {
    const { sessionId } = req.params;
    const index = sessions.find((u) => u.sessionId === parseInt(sessionId, 10));
  
    if (index > -1) {
      sessions[index].status = 'rejected';
  
      return res.status(200).send({
        status: 200,
        message: 'session rejected by mentor',
      });
    }
    return res.status(200).send({
      status: 200,
      message: 'Invalid session id',
    });
  }