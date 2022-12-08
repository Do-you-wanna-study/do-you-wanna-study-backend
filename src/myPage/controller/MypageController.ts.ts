import { NextFunction, Request, Response } from 'express';
import MyPageService from '../service/MyPageService';

export default async (req: Request, res: Response, next: NextFunction) => {
  const userId = req.body.userId
  const result = await MyPageService(userId)
  res.status(result.status).send(result);
};
