import { NextFunction, Request, Response } from 'express';
import { statusCode, util } from '../../modules';
import GetApplicantGradeService from '../service/GetApplicantGradeService';


export default async (req : Request, res : Response) => {
	const userId = req.body.userId
	const applicantNickname = req.query.applicant
	if (applicantNickname === undefined){
		res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, "need applicant nickname"));
		return
	}
	const result = await GetApplicantGradeService(applicantNickname.toString())
	res.status(result.status).send(result);
}