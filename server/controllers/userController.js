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
export async function signin(req, res) {
  const { email, password } = req.body;
  const userInfo = await Database.findUser('users', 'email', email);

  if (userInfo.rows[0]) {
    const verifyPassword = await bcrypt.compare(password, userInfo.rows[0].password);
    if (verifyPassword) {
      const token = genToken(req.body.email);
      return res.status(200).send({
        status: 200,
        message: 'User is successfully logged in',
        data: {
          token,
        },
      });
    } return res.status(401).send({
      status: 401,
      message: 'Email or Password doesnt match',
    });
  }
  return res.status(401).send({
    status: 401,
    message: 'Email or Password doesnt match',
  });
}

export async function upgradetomentor(req, res) {
  const { userId } = req.params;

  if (req.user.type === 'admin') {
    const updateToMentor = await Database.upgradeToMentor('users', 'userid', userId);
    if (updateToMentor.rowCount === 1) {
      return res.status(200).send({
        status: 200,
        message: 'User account changed to mentor',
        data: updateToMentor.rows[0],
      });
    }
    return res.status(422).send({
      status: 422,
      message: 'User account update failed',
    });
  }
  return 0;
}

export async function allmentors(req, res) {
  const allmentor = await Database.viewMentors();
  for (let x = 0; x < allmentor.rowCount; x += 1) {
    delete allmentor.rows[x].password;
  }

  if (allmentor.rowCount !== 0) {
    return res.status(200).send({
      status: 200,
      message: 'all mentors retrieved successfully',
      data: allmentor.rows,
    });
  }
  return res.status(401).send({
    status: 401,
    message: 'No mentors',
  });
}

export async function specificmentor(req, res) {
  const { mentorId } = req.params;
  const specificMentor = await Database.viewSpecificMentor('users', 'userid', mentorId);
  // console.log();
  // const tempData = specificMentor.rows[0];
  // specificMentor = { ...tempData };
  // console.log('before', specificMentor);

  // delete specificMentor.rows[0].password;

  // console.log('after', specificMentor);
  if (specificMentor.rows[0]) {
    delete specificMentor.rows[0].password;
    return res.status(200).send({
      status: 200,
      message: 'mentor retrieved successfully',
      data: specificMentor.rows[0],
    });
  }
  return res.status(401).send({
    status: 401,
    message: 'no mentor with that id',
  });
}
