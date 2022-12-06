import { NextFunction, Request, Response } from 'express';
import statusCode from '../../modules/statusCode';
import util from '../../modules/util';
import { RecruitmentReadApplyService } from '../service';

export default async (req: Request, res: Response) => {
  const userId = req.body.userId;
  if (req.query.id === undefined) {
    res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, 'bad request, no recruitment ID', false));
  } else {
    const recruitmentId = parseInt(req.query.id.toString());
    const result = await RecruitmentReadApplyService(userId, recruitmentId);
    res.status(result.status).send(result);
  }
};
