import { NextFunction, Request, Response } from 'express';
import { RecruitmentService } from '../service';
import { statusCode, util } from '../../modules';

export default async (req : Request, res : Response) => {
	let data
	if (req.params.community === undefined){
		data = await RecruitmentService(1)
	}else{
		const com = req.params.community
		data = await RecruitmentService(parseInt(com))
	}
	res.status(statusCode.OK).send(util.success(statusCode.OK, "default page", data));

}