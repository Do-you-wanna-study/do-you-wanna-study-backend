import { NextFunction, Request, Response } from 'express';
import RecruitmentController from './RecruitmentController';
import RecruitmentPostingController from './RecruitmentPostingController';

const procStudy = (req : Request, res : Response) =>{
	res.send('processing study')
}

const doneStudy = (req : Request, res : Response) =>{
	res.send('done study')
}

export {
	RecruitmentController,
	RecruitmentPostingController,
	procStudy,
	doneStudy
}

