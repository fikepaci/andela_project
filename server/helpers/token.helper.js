import jwt from 'jsonwebtoken';

const genToken = (email) => jwt.sign({ email }, process.env.KEY, { expiresIn: '1D' });

export default genToken;
