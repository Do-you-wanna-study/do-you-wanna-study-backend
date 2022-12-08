import { NextFunction, Request, Response } from 'express';
import { RecruitmentService } from '../service';
import { statusCode, util } from '../../modules';

function requestCheck(req: Request){
  let communityId, pageNumber, filter, search

  if (req.params.community === undefined) {
    communityId = 1;
  } else {
    communityId = parseInt(req.params.community);
  }
  if (req.params.pageno === undefined) {
    pageNumber = 1;
  } else {
    pageNumber = parseInt(req.params.pageNumber);
  }

  if (req.params.filter === undefined) {
    filter = 'all';
  } else {
    filter = req.params.filter;
  }
  if (req.query.search !== undefined){
    search = req.query.search.toString()
  }
  return {communityId, pageNumber, filter, search}
}

export default async (req: Request, res: Response) => {
  const {communityId, filter, pageNumber, search} = requestCheck(req);

  console.log(req.params);
  console.log(req.user);
  
  if (search !== undefined) {    
    const data = await RecruitmentService(communityId, filter, pageNumber, search);
    res.status(statusCode.OK).send(util.success(statusCode.OK, 'default page', data));
  } else {
    const data = await RecruitmentService(communityId, filter, pageNumber);
    res.status(statusCode.OK).send(util.success(statusCode.OK, 'default page', data));
  }
};
