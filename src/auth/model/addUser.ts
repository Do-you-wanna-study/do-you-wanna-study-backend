import { AppDataSource } from "../../loaders/db";
import {User} from '../../entities/User'

const addUser = async (user_email : string, user_password : string, user_nickname : string) => {
    const userRepo = AppDataSource.getRepository(User);
    const user = userRepo.create({ 
      email: user_email,
      password: user_password,
      nickname: user_nickname,
      isDeleted: false
    })
    return await userRepo.save(user)
  };

  export default addUser
  