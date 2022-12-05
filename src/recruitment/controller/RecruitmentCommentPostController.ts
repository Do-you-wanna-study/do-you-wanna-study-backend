import { NextFunction, Request, Response } from 'express';
import { statusCode, util } from '../../modules';
import { RecruitmentCommentPostService } from '../service';

export default async (req : Request, res : Response) => {
	
	if (req.query.id === undefined || req.body.content === undefined){
		res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, "BAD Requeset, no params"))
		return
	}
	else{
		const recruitmentId : number = parseInt(req.query.id.toString())
		//@ts-ignore
		const userId : number = parseInt(req.body.userId.toString())
		RecruitmentCommentPostService(recruitmentId, userId, req.body.content)
		res.status(statusCode.OK).send(util.success(statusCode.OK, "post comment"))
	}

}