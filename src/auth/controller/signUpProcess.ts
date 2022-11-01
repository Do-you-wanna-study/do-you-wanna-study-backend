import { NextFunction, Request, Response } from 'express';
import {signUpService} from '../service'

export default (req: Request, res: Response, next: NextFunction) => {
	if (req.body.email && req.body.nickname && req.body.password){
	  const {email, nickname, password}= req.body
	  signUpService(email, password, nickname)
	  res.send('good')
	}else{
	  res.send('bad');
	}
  }