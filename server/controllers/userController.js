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
      message: 'User created successfully',
      userId: user.rows[0].userid,
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
export function upgradetomentor(req, res) {
  const { userId } = req.params;
  const index = users.findIndex((u) => u.userId === parseInt(userId, 10));

  if (index > -1) {
    users[index].type = 'mentor';
    return res.status(200).send({
      status: 200,
      message: 'User account changed to mentor',
      data: users[index],
    });
  }
  return res.status(200).send({
    status: 200,
    message: 'Invalid user id',
  });
}
export function allmentors(req, res) {
  const allmentor = users.filter((u) => u.type === 'mentor');

  return res.status(200).send({
    status: 200,
    message: 'all mentors retrieved successfully',
    data: allmentor,
  });
}
export const specificmentor = (req, res) => {
  const { mentorId } = req.params;
  const index = users.find((u) => u.userId === parseInt(mentorId, 10) && u.type === 'mentor');

  if (index) {
    return res.status(200).send({
      status: 200,
      message: 'mentor retrieved successfully',
      data: index,
    });
  }
  return res.status(200).send({
    status: 200,
    message: 'no mentor with that id',
  });
};
