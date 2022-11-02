import { NextFunction, Request, Response } from 'express';
import { OpenRecruitmentService } from '../service';

export default async (req : Request, res : Response) => {
	const data = await OpenRecruitmentService()
	
	res.send(data);
}