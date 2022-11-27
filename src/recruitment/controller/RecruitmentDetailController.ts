import { NextFunction, Request, Response } from 'express';
import { RecruitmentDeatilService } from '../service';
import { statusCode, util } from '../../modules';

export default async (req : Request, res : Response) => {
	if (req.query.id === undefined){
		res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, "bad request, no qs"))
	}
	else{
		const id : number = parseInt(req.query.id.toString())
		const result = await RecruitmentDeatilService(id)
		res.status(statusCode.OK).send(util.success(statusCode.OK, "recruitment detail", result))
	}
}