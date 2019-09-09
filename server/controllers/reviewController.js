import { Review, reviews } from '../models/reviewModel';
import { sessions } from '../models/sessionModel';
import { users } from '../models/userModel';

export function createreview(req, res) {
  let { sessionId } = req.params;
  sessionId = parseInt(sessionId, 10);
  const isSessionFound = sessions.filter((c) => c.sessionId === sessionId);

  if (isSessionFound.length === 0) {
    return res.status(404).json({
      status: 404,
      error: 'session id not found',
    });
  }

  console.log(isSessionFound[0]);
  const sessionData = isSessionFound[0];
  const fullNames = users.find((info) => info.email === sessionData.menteeEmail);
  console.log(fullNames);

  const review = new Review((reviews.length + 1), sessionData.sessionId, sessionData.mentorId, sessionData.menteeId, req.body.score, `${fullNames.firstname} ${fullNames.lastname}`, req.body.remark);

  reviews.push(review);
  return res.status(201).send({
    status: 201,
    data: {
      message: 'review created successfully',
      Review: review,
    },
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
