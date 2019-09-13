import jwt from 'jsonwebtoken';

const genToken = (email, id, firstname, lastname) => jwt.sign({
  email, id, firstname, lastname,
}, process.env.KEY, { expiresIn: '1w' });

export default genToken;
