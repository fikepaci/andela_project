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
  console.log('here', req.params, sessionId, user, verified);

  // if (user.rowCount !== 0) {
  //   const reviewNew = {
  //     sessionid: user.rows[0].sessionid,
  //     mentorid: user.rows[0].mentorid,
  //     menteeid: parseInt(user1.rows[0].userid, 10),
  //     score: req.body.score,
  //     menteefullname: `${user1.rows[0].firstname} ${user1.rows[0].lastname}`,
  //     remark: req.body.remark,
  //   };

  //   const result = await Database.createReviews(reviewNew);
  //   return res.status(201).send({
  //     status: 201,
  //     message: 'review created successfully',
  //     data: result.rows[0],
  //   });
  // }
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
