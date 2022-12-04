import { NextFunction, Request, Response } from 'express';
import { statusCode, util } from '../../modules';
import { RecruitmentApplyService } from '../service';


export default async (req : Request, res : Response) => {
	if (req.body.description === undefined || req.query.id === undefined){
		res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, "BAD apply Requeset, no body"))
		return
	}
	else{
		//@ts-ignore
		const userId : number = req.user.id
		const recruitmentId : number = parseInt(req.query.id.toString())

		RecruitmentApplyService(userId, recruitmentId, req.body.description)
		res.status(statusCode.OK).send(util.success(statusCode.OK, "apply success"))
		return
	}
}