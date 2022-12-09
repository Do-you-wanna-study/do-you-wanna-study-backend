import { GetApplyList, GetRecruitementAuthor } from '../model';
import { util, statusCode } from '../../modules';

export default async (userId: number, recruitmentId: number) => {

  const recruitment = await GetRecruitementAuthor(recruitmentId);
  if (recruitment === null) {
    return util.fail(statusCode.DB_ERROR, 'DB query failed, check recruitment ID');
  }
  //@ts-ignore
  const author = recruitment.id;
  if (author !== userId) {
    return util.fail(statusCode.UNAUTHORIZED, 'Unauthorized access');
  }
  const applyList = await GetApplyList(recruitmentId);
  console.log(applyList);
  if (applyList === null) {
    return util.fail(statusCode.DB_ERROR, 'DB query failed, no applyList');
  }
  return util.success(statusCode.OK, 'success', applyList);
};
