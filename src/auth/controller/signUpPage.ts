import { NextFunction, Request, Response } from 'express';
import status from '../../modules/statusCode'

export default (req: Request, res: Response, next: NextFunction) => {

  res.status(status.OK).send('sign up page');
}