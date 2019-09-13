// import { Session, sessions } from '../models/sessionModel';
import jwt from 'jsonwebtoken';
import Database from '../database/queries';
import { User } from '../models/userModel';

export async function createsession(req, res) {
  const token = req.header('token');
  const verified = jwt.verify(token, process.env.KEY);
  const user = await Database.findUser('users', 'email', verified.email);

  const newSession = {
    mentorid: req.body.mentorid,
    menteeid: user.rows[0].userid,
    questions: req.body.questions,
    menteeemail: user.rows[0].email,
    status: 'pending',
  };

  try {
    if (user.rows[0]) {
      const sessionReg = await Database.createSessions(newSession);
      return res.status(201).send({
        status: 201,
        message: 'session created successfully',
        data: newSession,
      });
    }
  } catch (error) {
    return res.status(401).send({
      status: 404,
      message: 'no mentor with that id',
    });
  }
}
export async function acceptsession(req, res) {
  const { sessionId } = req.params;
  const acceptSession = await Database.acceptsession('sessions', 'sessionid', sessionId);
  console.log(acceptSession);
  if (acceptSession.rowCount === 0) {
    return res.status(400).send({
      status: 400,
      message: 'session not found ',
      data: acceptSession.rows[0],
    });
  }
  if (req.user.type !== 'mentor') {
    return res.status(400).send({
      status: 400,
      message: 'you are not a mentor ',
    });
  }

  try {
    if (req.user.type === 'mentor') {
      if (acceptSession.rowCount === 1) {
        return res.status(200).send({
          status: 200,
          message: 'session rejected by mentor',
          data: acceptSession.rows[0],
        });
      }
    }
  } catch (error) {
    return res.status(404).send({
      status: 404,
      message: 'session with that id not accepted',
    });
  }
}
export async function rejectsession(req, res) {
  const { sessionId } = req.params;
  const acceptSession = await Database.rejectsession('sessions', 'sessionid', sessionId);
  console.log(acceptSession);
  if (acceptSession.rowCount === 0) {
    return res.status(400).send({
      status: 400,
      message: 'session not found ',
      data: acceptSession.rows[0],
    });
  }
  if (req.user.type !== 'mentor') {
    return res.status(400).send({
      status: 400,
      message: 'you are not a mentor ',
    });
  }

  try {
    if (req.user.type === 'mentor') {
      if (acceptSession.rowCount === 1) {
        return res.status(200).send({
          status: 200,
          message: 'session rejected by mentor',
          data: acceptSession.rows[0],
        });
      }
    }
  } catch (error) {
    return res.status(404).send({
      status: 404,
      message: 'session with that id not rejected',
    });
  }
}
export async function allsessionsrequest(req, res) {
  const allSessions = await Database.viewSessiions();
  if (allSessions.rowCount !== 0) {
    return res.status(200).send({
      status: 200,
      message: 'all sessions request retrieved successfully',
      data: allSessions.rows,
    });
  }
  return res.status(401).send({
    status: 401,
    message: 'No sessions',
  });
}
