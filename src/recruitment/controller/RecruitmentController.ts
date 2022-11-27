import { NextFunction, Request, Response } from 'express';
import { RecruitmentService } from '../service';
import { statusCode, util } from '../../modules';


export default async (req : Request, res : Response) => {
	let communityId, filter, pageNumber

	console.log(req.params)
	if (req.params.community === undefined){
		communityId = 1
	}else{
		communityId = parseInt(req.params.community)
	}
	if (req.params.pageno === undefined){
		pageNumber = 1
	}else{
		pageNumber = parseInt(req.params.pageNumber)
	}
	
	if (req.params.filter === undefined){
		filter = "all"
	}else{
		filter = req.params.filter
	}
	if (req.query.search !== undefined){
		// @ts-ignore
		const data = await RecruitmentService(communityId, filter, pageNumber, req.query.search)
		res.status(statusCode.OK).send(util.success(statusCode.OK, "default page", data));
	}else{
		const data = await RecruitmentService(communityId, filter, pageNumber)
		res.status(statusCode.OK).send(util.success(statusCode.OK, "default page", data));
	}
}