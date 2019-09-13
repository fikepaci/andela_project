import jwt from 'jsonwebtoken';
import { users } from '../models/userModel';
import Database from '../database/queries';

export default async function verifyToken(req, res, next) {
  const token = req.header('token');

  if (!token) {
    return res.status(401).send({
      status: 401,
      message: 'Please sign in first.',
    });
  }
  try {
    const verified = jwt.verify(token, process.env.KEY);
    const user = await Database.findUser('users', 'email', verified.email);
    req.user = {
      token: verified,
      email: verified.email,
      type: user.rows[0].type,
      id: user.rows[0].userid,
      firstname: user.rows[0].firstname,
      lastname: user.rows[0].lastname,
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
