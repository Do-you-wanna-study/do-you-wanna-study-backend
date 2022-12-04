import { Recruitment } from '../../entities/Recruitment';
import { AppDataSource } from '../../loaders/db';

export default async (recruitmentId: number) => {
  return AppDataSource.getRepository(Recruitment).find({
    relations: {
      recruitmentApplyList: true,
    },
    where: {
      id: recruitmentId,
    },
  });
};
