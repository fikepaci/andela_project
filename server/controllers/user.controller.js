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
  