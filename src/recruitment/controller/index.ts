import { NextFunction, Request, Response } from 'express';
import OpenRecruitmentController from './OpenRecruitmentController';
import RecruitmentPostingController from './RecruitmentPostingController';

const procStudy = (req : Request, res : Response) =>{
	res.send('processing study')
}

const doneStudy = (req : Request, res : Response) =>{
	res.send('done study')
}

export {
	OpenRecruitmentController,
	RecruitmentPostingController,
	procStudy,
	doneStudy
}
