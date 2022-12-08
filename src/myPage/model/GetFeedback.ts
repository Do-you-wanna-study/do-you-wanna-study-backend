import { Recruitment } from "../../entities/Recruitment";
import { RecruitmentApply } from "../../entities/RecruitmentApply";
import { UserEvaluation } from "../../entities/UserEvaluation";
import { AppDataSource } from "../../loaders/db";

export default async (userId : number) => {
	return AppDataSource
	.getRepository(UserEvaluation)
	.find({
		where:{
			toUser:{
				id: userId
			}
		},
		select:{
			content: true
		}
	})
}