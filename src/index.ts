import express, { Request, Response, NextFunction } from 'express';
import { AppDataSource, connectDB } from './loaders/db';
import session from 'express-session';
import router from './router';
import config from './config';
import dotenv from 'dotenv';
import passport from 'passport';
import passportConfig from './passport';
import cors from 'cors'
import {RecruitmentController} from './recruitment/controller'

const app = express();
dotenv.config();

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors())

app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
  }),
);

passportConfig();

app.use(passport.initialize());
app.use(passport.session());

app.use(router);

interface ErrorType {
  message: string;
  status: number;
}

app.use(function (err: ErrorType, req: Request, res: Response, next: NextFunction) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'production' ? err : {};

  res.status(err.status || 500);
  console.log(err);
  res.send('error');
});

//기본 메인 페이지같은경우는 어디서 설정해주는게 맞는지 모르겠네
app.get('/', RecruitmentController)

app
  .listen(config.port, () => {
    console.log(`
    ########################################################
        ☁️ Do you wanna study Server listening on port ☁️
    ########################################################
  `);
  })
  .on('error', (err) => {
    console.error(err);
    process.exit(1);
  });

export default app;
