// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import { it, describe } from 'mocha';
import jwt from 'jsonwebtoken';

import app from '../app';
// Configure chai
chai.use(chaiHttp);

chai.should();

const newreview = {
  score: 2,
  remark: 'i like the way you we corrabolate thanks for your offer'
};
const generalusers = {
  email: 'pacifique@gmail.com',
};

const usergeneraltoken = jwt.sign(generalusers, process.env.KEY, { expiresIn: '1D' });
describe('reviews', () => {
  it('user should be able to create a review', (done) => {
    chai.request(app).post('/api/v1/sessions/2/review')
      .set('token', usergeneraltoken)
      .send(newreview)
      .then((res) => {
        chai.expect(res).to.have.status(201);
        done();
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
});
