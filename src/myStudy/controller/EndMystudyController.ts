import { NextFunction, Request, Response } from 'express';
import {statusCode, util} from '../../modules';
import { EndMystudyService } from '../service';


export default async (req: Request, res: Response, next: NextFunction) => {
	const userId = req.body.userId
	const result = await EndMystudyService(userId, 6)

	res.status(result.status).send(result)
};
  