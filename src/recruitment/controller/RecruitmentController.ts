import { NextFunction, Request, Response } from 'express';
import { OpenRecruitmentService } from '../service';

const mainPage = async (req : Request, res : Response) => {
	const data = await OpenRecruitmentService()
	
	res.send(data);
}

const procStudy = (req : Request, res : Response) =>{
	res.send('processing study')
}

const doneStudy = (req : Request, res : Response) =>{
	res.send('done study')
}

export default {
	mainPage,
	procStudy,
	doneStudy
}

