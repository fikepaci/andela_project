// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import { it, describe } from 'mocha';
import jwt from 'jsonwebtoken';

import app from '../app';

import {
  newuser, mentor, sessiondata1, newuser1, user4, newuser2, newuser3, newuser4, newuser5, loginuser, admin, generalusers, signedUser, newUserCredentials, user3,
} from './mockData';

// Configure chai
chai.use(chaiHttp);
chai.should();


const adminToken = jwt.sign(admin, process.env.KEY, { expiresIn: '1D' });
const userToken = jwt.sign(signedUser, process.env.KEY, { expiresIn: '1D' });
const userToken3 = jwt.sign(user3, process.env.KEY, { expiresIn: '1D' });
const usertoken4 = jwt.sign(user4, process.env.KEY, { expiresIn: '1D' });
const mentortoken = jwt.sign(mentor, process.env.KEY, { expiresIn: '1D' });
const usergeneraltoken = jwt.sign(newUserCredentials, process.env.KEY, { expiresIn: '1D' });


describe('sessions test', () => {
  it('user should be able to create session', (done) => {
    chai.request(app).post('/api/v2/sessions')
      .set('token', userToken3)
      .send(sessiondata1)
      .then((res) => {
        chai.expect(res).to.have.status(201);
        done();
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
  it('mentor should be able to accept session', (done) => {
    chai.request(app).patch('/api/v2/sessions/1/accept')
      .set('token', mentortoken)
      .then((res) => {
        chai.expect(res).to.have.status(200);
        done();
      })
      .catch((err) => {
        console.log(err.message);
        done();
      });
  });
  it('mentor should be able to accept session', (done) => {
    chai.request(app).patch('/api/v2/sessions/1/reject')
      .set('token', mentortoken)
      .then((res) => {
        chai.expect(res).to.have.status(200);
        done();
      })
      .catch((err) => {
        console.log(err.message);
        done();
      });
  });

  it('user should be able to view all session request', (done) => {
    chai.request(app).get('/api/v2/sessions')
      .set('token', usertoken4)
      .then((res) => {
        chai.expect(res).to.have.status(200);
        done();
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
});
