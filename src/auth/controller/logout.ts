import { NextFunction, Request, Response } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
	req.logout(function(err){
		if (err) { return next(err); }
		res.redirect('/recruitment');
	});
}