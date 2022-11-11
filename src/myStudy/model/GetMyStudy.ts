import { AppDataSource } from "../../loaders/db"


export default async (userId : number) => {
	return AppDataSource
	.getRepository("study_group_to_user")
	.createQueryBuilder("study_group_to_user")
	.leftJoinAndSelect("study_group_to_user.studyGroup", "study_group")
	.leftJoinAndSelect("study_group_to_user.user", "user")
	.getMany()
}