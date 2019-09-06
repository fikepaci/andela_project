// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import { it, describe } from 'mocha';
import jwt from 'jsonwebtoken';

import app from '../app';
// Configure chai
chai.use(chaiHttp);

chai.should();

const newusession = {
  sessionId: 1,
  mentorId: 3,
  menteeId: 2,
  questions: 'i want to learn javascript and python',
  menteeEmail: 'fike@gmail.com',
  status: 'pending',
};
const generalusers = {
  email: 'pacifique@gmail.com',
  firstname: 'brian',
  lastname: 'james',
  password: 'kicukiro2',
  address: 'kigali,kist',
  bio: 'i like knowing new things',
  occupation: 'developer',
  expertise: '2years',
};
const usergeneraltoken = jwt.sign(generalusers, process.env.KEY, { expiresIn: '1D' });
describe('sessions', () => {
  it('user should be able to create session', (done) => {
    chai.request(app).post('/api/v1/sessions')
      .set('token', usergeneraltoken)
      .send(newusession)
      .then((res) => {       
        chai.expect(res).to.have.status(201);
        done();
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
  it('user should be able to view all session request', (done) => {
    chai.request(app).get('/api/v1/sessions')
      .set('token', usergeneraltoken)
      .send(newusession)
      .then((res) => {
        chai.expect(res).to.have.status(200);
        done();
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
});
