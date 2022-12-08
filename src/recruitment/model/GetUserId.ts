import { User } from '../../entities/User';
import { AppDataSource } from '../../loaders/db';

export default async (nickname: string) => {
  return await AppDataSource
  .getRepository(User)
  .createQueryBuilder("user")
  .select("user.id", "id")
  .where("user.nickname = :nickname", {nickname: nickname})
  .getRawOne()
 
};
