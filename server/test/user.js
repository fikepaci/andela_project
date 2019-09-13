// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import { it, describe } from 'mocha';
import jwt from 'jsonwebtoken';

import app from '../app';

import {
  newuser, newuser1, user4, newuser2, newuser3, newuser4, newuser5, loginuser, admin, generalusers, signedUser, newUserCredentials, user3,
} from './mockData';

// Configure chai
chai.use(chaiHttp);
chai.should();


const adminToken = jwt.sign(admin, process.env.KEY, { expiresIn: '1D' });
const userToken = jwt.sign(signedUser, process.env.KEY, { expiresIn: '1D' });
const userToken3 = jwt.sign(user3, process.env.KEY, { expiresIn: '1D' });
const usertoken4 = jwt.sign(user4, process.env.KEY, { expiresIn: '1D' });
const usergeneraltoken = jwt.sign(newUserCredentials, process.env.KEY, { expiresIn: '1D' });


describe('users activities test', () => {
  it('user should be able to signup', (done) => {
    chai.request(app).post('/api/v2/auth/signup')
      .send(newuser)
      .then((res) => {
        chai.expect(res).to.have.status(201);
        done();
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
  it('user should be able to signin second user', (done) => {
    chai.request(app).post('/api/v2/auth/signup')
      .send(newuser2)
      .then((res) => {
        chai.expect(res).to.have.status(201);
        done();
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
  it('user should be able to to signin third user', (done) => {
    chai.request(app).post('/api/v2/auth/signup')
      .send(newuser3)
      .then((res) => {
        chai.expect(res).to.have.status(201);
        done();
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
  it('user should be able to to signin forth user', (done) => {
    chai.request(app).post('/api/v2/auth/signup')
      .send(newuser4)
      .then((res) => {
        chai.expect(res).to.have.status(201);
        done();
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
  it('user should be able to signin fith user', (done) => {
    chai.request(app).post('/api/v2/auth/signup')
      .send(newuser5)
      .then((res) => {
        chai.expect(res).to.have.status(201);
        done();
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
  it('user should be able to signin', (done) => {
    chai.request(app).post('/api/v2/auth/signin')

      .send(loginuser)
      .set('token', userToken)
      .then((res) => {
        chai.expect(res).to.have.status(200);
        done();
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
  it('admin should change user to mentor', (done) => {
    chai.request(app).patch('/api/v2/user/2')
      .set('token', adminToken)
      .then((res) => {
        console.log('change user to mentee !!!!!!!!!!!!!!!!!!!!!', res);

        chai.expect(res).to.have.status(200);
        done();
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
  it('user should view all mentors', (done) => {
    chai.request(app).get('/api/v2/mentors')
      .set('token', userToken3)
      .then((res) => {
        console.log('user view all mentee !!!!!!!!!!!!!!!!!!!!!', res);
        chai.expect(res).to.have.status(200);
        done();
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
  it('user should view specific mentor', (done) => {
    chai.request(app).get('/api/v2/mentors/2')
      .set('token', usertoken4)
      .then((res) => {
        console.log('user view specific mentee !!!!!!!!!!!!!!!!!!!!!', res);
        chai.expect(res).to.have.status(200);
        done();
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
});
