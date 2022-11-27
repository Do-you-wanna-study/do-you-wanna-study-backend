import { NextFunction, Request, Response } from 'express';
import RecruitmentController from './RecruitmentController';
import RecruitmentPostingController from './RecruitmentPostingController';
import RecruitmentDetailController from './RecruitmentDetailController';
import RecruitmentCommentPostController from './RecruitmentCommentPostController';

const procStudy = (req : Request, res : Response) =>{
	res.send('processing study')
}

const doneStudy = (req : Request, res : Response) =>{
	res.send('done study')
}

export {
	RecruitmentController,
	RecruitmentPostingController,
	RecruitmentDetailController,
	RecruitmentCommentPostController,
	procStudy,
	doneStudy
}

