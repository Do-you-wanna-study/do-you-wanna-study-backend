import { NextFunction, Request, Response } from 'express';
import {statusCode, util} from '../../modules';
import { EndMystudyService } from '../service';


export default (req: Request, res: Response, next: NextFunction) => {
	const userId = req.body.userId
	EndMystudyService(userId, 1)
};
  