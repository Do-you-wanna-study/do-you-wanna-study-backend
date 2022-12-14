import passport from 'passport';
import passportLocal from 'passport-local';
import { Repository } from 'typeorm';
import getUser from '../model/getUser';
import code from '../modules/statusCode';

const LocalStrategy = passportLocal.Strategy;

export default () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
        session: true,
        passReqToCallback: false,
      },
      async function verify(email: string, password: string, done: Function) {
        try {
          const [user]: any = await getUser(email);
          if (user.password === password) {
            console.log(user)
            const userInfo = {
              id: user.id,
              nickname: user.nickname
            }
            return done(null, userInfo);
          } else {
            return done(null, false, {
              message: 'Incorrect Password',
            });
          }
        } catch (err) {
          console.log(err);
          return done(null, false, {
            message: 'No ID',
          });
        }
      },
    ),
  );
};
