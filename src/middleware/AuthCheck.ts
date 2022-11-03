import { Response, Request, NextFunction } from 'express';

const isLogin: any = (req: Request, res: Response, next: NextFunction) => {
  if (req.user) {
    console.log('logined ', req.user);
    next();
  } else {
    console.log('not logined');
    res.redirect('/auth/login');
  }
};


export default isLogin;
