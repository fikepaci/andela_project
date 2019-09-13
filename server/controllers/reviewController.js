import jwt from 'jsonwebtoken';
import { Review, reviews } from '../models/reviewModel';
import { sessions } from '../models/sessionModel';
import { users } from '../models/userModel';
import Database from '../database/queries';

export async function createreview(req, res) {
  const token = req.header('token');
  const verified = jwt.verify(token, process.env.KEY);

  let { sessionId } = req.params;
  sessionId = parseInt(sessionId, 10);
  const user = await Database.findUser('sessions', 'sessionid', sessionId);
  const user1 = await Database.findUser('users', 'userid', user.rows[0].menteeid);
  return res.status(404).send({
    status: 404,
    message: 'not found',
  });
}
export function deletereview(req, res) {
  const { sessionId } = req.params;
  const erase = reviews.findIndex((u) => u.sessionId === parseInt(sessionId, 10));

  if (erase > -1) {
    reviews.splice(erase, 1);
    return res.status(200).send({
      status: 200,
      message: 'review deleted successfully',
      data: reviews.reviewid,
    });
  }
  return res.status(200).send({
    status: 200,
    message: 'Invalid session id',
  });
}
