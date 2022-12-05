import { Recruitment } from "../../entities/Recruitment";
import { AppDataSource } from "../../loaders/db";

export default async (userId : number) => {
	return AppDataSource
	.getRepository(Recruitment)
	.find({
		relations:{
			author: true
		},
		where:{
			author: {
				id : userId
			}
		}
	})
}