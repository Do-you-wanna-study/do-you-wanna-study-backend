import { NextFunction, Request, Response } from 'express';
import statusCode from '../../modules/statusCode';
import util from '../../modules/util'
import {signUpService} from '../service'

const {success, fail} = util

export default async (req: Request, res: Response, next: NextFunction) => {
	if (req.body.email && req.body.nickname && req.body.password){
	  const {email, nickname, password}= req.body
	  if (await signUpService(email, password, nickname) === 0){
		res.send(fail(statusCode.OK, "duplicated email"))
	  }
	  res.send(success(statusCode.OK, "Success"))
	}else{
		res.send(fail(statusCode.OK, "wrong input"))
	}
  }