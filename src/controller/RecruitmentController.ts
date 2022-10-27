import { NextFunction, Request, Response } from 'express';
import authCheck from '../middleware/authCheck'

const mainPage = (req : Request, res : Response) => {
	if (authCheck.isLogin)
	res.send('default (all) Page!');
}

const procStudy = (req : Request, res : Response) =>{
	res.send('processing study')
}

const doneStudy = (req : Request, res : Response) =>{
	res.send('done study')
}

const communityController = {
	mainPage,
	procStudy,
	doneStudy
}

export default communityController;