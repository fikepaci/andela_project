import { User, users } from '../models/user.model';
import genToken from '../helpers/token.helper';

export function signup(req, res) {
  const user = new User(users.length + 1, req.body.email,
    req.body.firstname, req.body.lastname, req.body.password, req.body.address,
    req.body.bio, req.body.occupation, req.body.expertise);

  users.push(user);

  const token = genToken(user.email);

  return res.status(201).send({
    status: 201,
    message: 'User created successfully',
    data: {
      token,
      message: 'User created successfully',
      userId: user.userId,
    },
  });
}