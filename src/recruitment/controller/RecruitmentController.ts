import { NextFunction, Request, Response } from 'express';


const mainPage = (req : Request, res : Response) => {
	
	res.send('default (all) Page!');
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

