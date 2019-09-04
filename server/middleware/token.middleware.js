import jwt from 'jsonwebtoken';
import { users } from '../models/user.model';

export default function verifyToken(req, res, next) {
  const token = req.header('token');

  if (!token) {
    return res.status(401).send({
      status: 401,
      message: 'Please sign in first.',
    });
  }

  try {
    const verified = jwt.verify(token, process.env.KEY);
    const user = users.find((u) => u.email === verified.email);
    req.user = {
      token: verified,
      email: verified.email,
      type: user.type,
      id: user.userId,
    };

    next();
  } catch (error) {
    return res.status(400).send({
      status: 400,
      message: 'Invalid token!',
    });
  }

  return 0;
}
