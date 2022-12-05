import { GetMyRecruit } from "../model"

export default async (userId : number) => {
	  return await GetMyRecruit(userId)
}