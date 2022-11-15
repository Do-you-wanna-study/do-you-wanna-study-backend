import { NextFunction, Request, Response } from 'express';
import { RecruitmentService } from '../service';
import { statusCode, util } from '../../modules';

export default async (req : Request, res : Response) => {
	let communityId, filter
	if (req.params.community === undefined){
		communityId = 1
	}else{
		communityId = parseInt(req.params.community)
	}
	if (req.params.filter === undefined){
		filter = "all"
	}else[
		filter = req.params.filter
	]
	const data = await RecruitmentService(communityId, filter)
	res.status(statusCode.OK).send(util.success(statusCode.OK, "default page", data));

}