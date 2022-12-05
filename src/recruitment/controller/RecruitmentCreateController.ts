import { NextFunction, Request, Response } from 'express';
import { RecruitmentCreateService } from '../service';
import { statusCode, util } from '../../modules';

export default async (req: Request, res: Response) => {
	if (req.query.id === undefined ){
		res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, "Bad Request, no id"))
		return
	}
	if (req.body.groupName === undefined || req.body.period === undefined || req.body.startDate === undefined){
		res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, "Bad Request, insufficient parameter"))
		return
	}
	const userId = req.body.userId
	const recruitmentId = parseInt(req.query.id.toString())
	const groupName = req.body.groupName
	const period = parseInt(req.body.period)
	const startDate = new Date(req.body.startDate.toString())
	const result = await RecruitmentCreateService(userId, recruitmentId, groupName, period, startDate)
	res.status(result.status).send(result)
}