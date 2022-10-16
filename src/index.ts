import express, { Request, Response, NextFunction } from 'express';
import connectDB from './loaders/db';
import router from './router';
import config from './config';
import dotenv from 'dotenv';
const app = express();

dotenv.config();

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

interface ErrorType {
  message: string;
  status: number;
}

app.use(function (err: ErrorType, req: Request, res: Response, next: NextFunction) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'production' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

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