import bcrypt from 'bcrypt';
import { users } from '../models/userModel';
import Database from '../database/queries';

export const hashPassword = async (req, res, next) => {
  const salt = await bcrypt.genSalt(10);
  const hashPasswor = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashPasswor;
  next();
};

export const authanticate = async (req, res, next) => {
  const user = users.find((u) => u.email === req.body.email);

  if (user) {
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (validPassword) {
      next();
    } else {
      return res.status(404).send({
        status: 404,
        message: 'Password is not match, please try again.',
      });
    }
  } else {
    return res.status(404).send({
      status: 404,
      message: 'Email is not match, please try again.',
    });
  }
  return 0;
};
export function isAdmin(req, res, next) {
  if (req.user.type === 'admin') {
    next();
  } else {
    return res.status(404).send({
      status: 404,
      message: 'You are not Admin.',
    });
  }
  return 0;
}

export function isuser(req, res, next) {
  if (req.user.type === 'user') {
    next();
  } else {
    return res.status(404).send({
      status: 404,
      message: 'You are not user.',
    });
  }
  return 0;
}
export async function isEmailUsed(req, res, next) {

  const user = await Database.selectBY('users', 'email', req.body.email);

  if (user.rowCount !== 0) {
    return res.status(401).send({
      status: 401,
      message: 'Email already exist',
      data: user.rows[0].email,
    });
  }
  next();
  return 0;
}
export function ismentor(req, res, next) {
  if (req.user.type === 'mentor') {
    next();
  } else {
    return res.status(404).send({
      status: 404,
      message: 'You are not mentor.',
    });
  }
  return 0;
}
