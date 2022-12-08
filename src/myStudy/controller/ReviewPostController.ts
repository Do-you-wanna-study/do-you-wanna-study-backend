import { NextFunction, Request, Response } from 'express';
import {statusCode, util} from '../../modules';
import { ReviewService } from '../service';

function requestCheck(req: Request){
	if (req.query.id === undefined){
		return {userId: undefined, studyId: undefined, content: undefined, evaluates: undefined}
	}
	const userId =  parseInt(req.body.userId.toString())
	const studyId = parseInt(req.query.id.toString())
	const content = req.body.content
	const evaluates = req.body.evaluates
	return {userId, studyId, content, evaluates}
}

export default async (req: Request, res: Response, next: NextFunction) => {
	
	const inputData = requestCheck(req)
	if (inputData.studyId === undefined){
		res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, "no study id"))
		return
	}else if(inputData.content === undefined || inputData.evaluates === undefined){
		res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, "need more arguments"))
		return
	}
	const result = await ReviewService(inputData)
	res.status(result.status).send(result)
}