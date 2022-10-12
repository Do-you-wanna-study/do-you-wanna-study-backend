import { NextFunction, Request, Response } from 'express';

const getMyPage = (req : Request, res : Response, next : NextFunction) => {
	res.send('myPage');
}



const myPageController = {
	getMyPage
}

export default myPageController;