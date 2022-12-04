import { AppDataSource } from '../../loaders/db';
import { Recruitment } from '../../entities/Recruitment';
import { RecruitmentToTag } from '../../entities/RecruitmentToTag';
import { RecruitmentComment } from '../../entities/RecruitmentComment';

export default async (recruitmentId: number) => {
    return AppDataSource.getRepository(Recruitment)
      .createQueryBuilder('recruitment')
      .leftJoinAndSelect('recruitment.recruitmentToTagList', 'recruitment_to_tag')
      .leftJoinAndSelect('recruitment_to_tag.tag', 'tag')
      .leftJoinAndSelect('recruitment.community', 'community')
      .leftJoinAndSelect('recruitment.recruitmentCommentList', 'recruitment_comment')
      .leftJoinAndSelect('recruitment_comment.user', 'comment_user')
      .leftJoinAndSelect('recruitment.author', 'user')
      .where('recruitment.id = :id', { id: recruitmentId })
      .getOne();

};
