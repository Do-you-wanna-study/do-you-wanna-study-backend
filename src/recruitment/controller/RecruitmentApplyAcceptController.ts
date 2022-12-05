import { NextFunction, Request, Response } from 'express';
import { statusCode, util } from '../../modules';
import { RecruitmentApplyAcceptService } from '../service';

export default async (req : Request, res : Response) => {
	const userId = req.body.userId

	if (req.query.id === undefined){
		res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, "Bad Request, no apply id"))
		return
	}
	const applyId = parseInt(req.query.id?.toString())
	const result = await RecruitmentApplyAcceptService(userId, applyId)
	res.status(statusCode.OK).send(result)
}