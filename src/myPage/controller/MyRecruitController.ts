import { NextFunction, Request, Response } from 'express';
import { MyRecruitService } from '../service';
import { util, statusCode } from '../../modules';

export default async (req: Request, res: Response, next: NextFunction) => {
	const userId = req.body.userId
	const data = await MyRecruitService(userId)
	
	res.status(statusCode.OK).send(util.success(statusCode.OK, "My Recruiting list", data))
};
