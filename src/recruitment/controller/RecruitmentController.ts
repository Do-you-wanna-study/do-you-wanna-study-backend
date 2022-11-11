import { NextFunction, Request, Response } from 'express';
import { RecruitmentService } from '../service';
import { statusCode, util } from '../../modules';

export default async (req : Request, res : Response) => {
	
	let data  = await RecruitmentService(parseInt(req.params.community))
	
	res.status(statusCode.OK).send(util.success(statusCode.OK, "default page", data));

}