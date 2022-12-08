import { UserEvaluation } from "../../entities/UserEvaluation";
import { AppDataSource } from "../../loaders/db";

export default  (userId : number) => {
	return AppDataSource
	.getRepository(UserEvaluation)
	.createQueryBuilder("eva")
	.where("eva.to_user = :id", {id : userId})
	.select("SUM(eva.skill)", "skill_sum")
	.addSelect("COUNT(eva.skill)", "skill_count")
	.addSelect("SUM(eva.kindness)", "kindness_sum")
	.addSelect("COUNT(eva.kindness)", "kindness_count")
	.addSelect("SUM(eva.sincerity)", "sincerity_sum")
	.addSelect("COUNT(eva.sincerity)", "sincerity_count")
	.addSelect("SUM(eva.helpful)", "helpful_sum")
	.addSelect("COUNT(eva.helpful)", "helpful_count")	
	.getRawOne()
}