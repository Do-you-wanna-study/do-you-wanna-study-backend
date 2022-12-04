import { NextFunction, Request, Response } from 'express';
import { myStudyService } from '../service';
import {statusCode, util} from '../../modules';
// import { User } from '../../type/express'


export default (req: Request, res: Response, next: NextFunction) => {
	if (req.user !== undefined){
		// @ts-ignore
		const result = myStudyService(req.user.id)
		res.status(statusCode.OK).send(util.success(statusCode.OK, "my study list", result));
	}
	else{
		res.status(statusCode.OK).send(util.fail(statusCode.OK, "no user data"));
	}
};
  