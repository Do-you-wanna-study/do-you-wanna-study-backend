import app from '../index';
import dotenv from 'dotenv';
import req from 'supertest';
dotenv.config();

/**
 * 로그인
 */
describe('POST /auth/login', () => {
  it('로그인 성공', (done) => {
    req(app)
      .post('/auth/login')
      .set('Content-Type', 'application/json')
      .send({
        socialToken: process.env.JWT_TOKEN,
      })
      .expect(200)
      .expect('Content-Type', /json/)
      .then((res) => {
        done();
      })
      .catch((err) => {
        console.error('######Error >>', err);
        done(err);
      });
  });
});