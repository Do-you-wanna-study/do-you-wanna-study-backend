import { NextFunction, Request, Response } from 'express';
import { util, statusCode } from '../../modules';
import FeedbackService from '../service/FeedbackService';

export default async (req: Request, res: Response, next: NextFunction) => {
	const userId = req.body.userId

	const result = await FeedbackService(userId)

	res.status(result.status).send(result)
};
