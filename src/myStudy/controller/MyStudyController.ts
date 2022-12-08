import { NextFunction, Request, Response } from 'express';
import { myStudyService } from '../service';
import {statusCode, util} from '../../modules';


export default async (req: Request, res: Response, next: NextFunction) => {
	const userId = req.body.userId
	const result = await myStudyService(userId)
	if (result !== undefined){
		console.log(result)
		res.status(statusCode.OK).send(util.success(statusCode.OK, "my study list", result));
	}
	else{
		res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, "no user data"));
	}
};
  