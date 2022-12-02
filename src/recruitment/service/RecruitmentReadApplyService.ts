import { GetRecruitementAuthor } from '../model';
import { util, statusCode } from '../../modules';

export default async (userId: number, recruitmentId: number) => {
  const recruitment = await GetRecruitementAuthor(recruitmentId);
  if (recruitment === null) {
    return util.fail(statusCode.DB_ERROR, 'DB query failed, check recruitment ID');
  }
  const author = recruitment.author.id;
  if (author !== userId) {
    return util.fail(statusCode.UNAUTHORIZED, 'Unauthorized access');
  }
};
