import { Response, Request, NextFunction } from 'express';
import { stat } from 'fs';
import statusCode from '../modules/statusCode';
import util from '../modules/util';

const isLogin: any = (req: Request, res: Response, next: NextFunction) => {
  if (req.user) {
    console.log('logined ', req.user);
    next();
  } else {
    console.log('not logined');
    res.status(statusCode.OK).send(util.fail(statusCode.OK, "Need Login", false))
  }
};


export default isLogin;
