import bcrypt from 'bcrypt';
import { User, users } from '../models/userModel';
import genToken from '../helpers/tokenHelper';
import Database from '../database/queries';

export async function signup(req, res) {
  const input = req.body;
  input.type = 'user';
  const user = await Database.createUsers(input);
  const token = genToken(input.email);

  return res.status(201).send({
    status: 201,
    message: 'User created successfully',
    data: {
      token,
    },
  });
}
export function signin(req, res) {
  const token = genToken(req.body.email);

  return res.status(200).send({
    status: 200,
    message: 'User is successfully logged in',
    data: {
      token,
    },
  });
}
