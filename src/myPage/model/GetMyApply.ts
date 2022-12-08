import { Recruitment } from "../../entities/Recruitment";
import { RecruitmentApply } from "../../entities/RecruitmentApply";
import { AppDataSource } from "../../loaders/db";

export default async (userId : number) => {
	const apply = await AppDataSource
	.getRepository(RecruitmentApply)
	.createQueryBuilder("apply")
	.where("apply.user_id = :id", {id:userId})
	.getCount()
	
	const recruit = await AppDataSource
	.getRepository(Recruitment)
	.createQueryBuilder("recruit")
	.where("recruit.author_id = :id", {id : userId})
	.andWhere("recruit.status = :status", {status: "recruiting"})
	.getCount()

	return {apply: apply, recruit: recruit}
}