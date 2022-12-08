import { NextFunction, Request, Response } from 'express';
import {statusCode, util} from '../../modules';
import { EndMystudyService } from '../service';


export default async (req: Request, res: Response, next: NextFunction) => {
	const userId = req.body.userId
	if (req.query.id === undefined){
		res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, "no study ID"))
		return
	}
	const studyId = parseInt(req.query.id.toString())
	const result = await EndMystudyService(userId, studyId)

	res.status(result.status).send(result)
};
  