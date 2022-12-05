import { AppDataSource } from '../../loaders/db';
import { Recruitment } from '../../entities/Recruitment';
import { User } from '../../entities/User';

export default async (recruitmentId: number) => {
  return (await AppDataSource.getRepository(Recruitment).findOne({
    relations: {
      author: true,
    },
    select: {
      author: {
        id: true,
      },
    },
    where: {
      id: recruitmentId,
    },
  }))?.author
};
