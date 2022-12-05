import { RecruitmentApply } from '../../entities/RecruitmentApply';
import { AppDataSource } from '../../loaders/db';

export default async (recruitmentId: number) => {
  return AppDataSource.getRepository(RecruitmentApply).find({
    relations: {
      user: true
    },
    select:{
      user:{
        nickname: true
      }
    },
    where: {
      id: recruitmentId,
    },
  });
};
