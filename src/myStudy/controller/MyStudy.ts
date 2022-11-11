import { NextFunction, Request, Response } from 'express';
import { myStudyService } from '../service';

export default (req: Request, res: Response, next: NextFunction) => {
	if (req.user !== undefined){
		myStudyService(req.user.id)
	}
	
	res.send('myStudy');
};
  