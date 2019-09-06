import jwt from 'jsonwebtoken';

const genToken = (email) => jwt.sign({ email }, process.env.KEY, { expiresIn: '1w' });

export default genToken;
