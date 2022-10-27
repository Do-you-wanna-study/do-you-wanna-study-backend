import { AppDataSource } from "../../loaders/db";
import {User} from '../../entities/User'

const getUser = async (input : string) => {
    
    const userRepo = AppDataSource.getRepository(User);
	console.log("hi", userRepo)
    await userRepo
      .find({ where: { email: input } })
      .then((data) => {
        return data
      })
      .catch((err) => console.log(err));
  };

  export default getUser
  