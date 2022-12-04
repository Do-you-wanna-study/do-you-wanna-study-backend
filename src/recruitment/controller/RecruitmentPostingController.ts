import { NextFunction, Request, Response } from 'express';
import statusCode from '../../modules/statusCode';
import util from '../../modules/util';
import { RecruitmentPosingService } from '../service';

export default async (req: Request, res: Response) => {
  const data = req.body;

  if (req.user) {
    RecruitmentPosingService(data, req.user);
    res.status(statusCode.OK).send(util.success(statusCode.OK, 'good'));
  } else {
    res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, 'bad request', false));
  }
};
