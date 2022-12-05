import { NextFunction, Request, Response } from 'express';
import { RecruitmentDeatilService } from '../service';
import { statusCode, util } from '../../modules';

export default async (req: Request, res: Response) => {
  console.log(req.query);
  if (req.query.id === undefined) {
    res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, 'bad request, no qs'));
  } else {
    const id: number = parseInt(req.query.id.toString());
    const result = await RecruitmentDeatilService(id);
    const t = await result?.recruitmentCommentList[0].user
    console.log(t)
    res.status(statusCode.OK).send(util.success(statusCode.OK, 'recruitment detail', result));
  }
};
