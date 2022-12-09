import { RecruitmentApply } from '../../entities/RecruitmentApply';
import { AppDataSource } from '../../loaders/db';

export default async (recruitmentId: number) => {
  console.log(recruitmentId)
  return AppDataSource.getRepository(RecruitmentApply).find({
    where: {
      recruitment: {
        id: recruitmentId
      }
    },
    relations: {
      user: true
    },
    select:{
      user:{
        nickname: true
      }
    },
  });
};
