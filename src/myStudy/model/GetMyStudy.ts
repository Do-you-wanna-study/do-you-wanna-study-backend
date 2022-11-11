import { StudyGroup } from "../../entities/StudyGroup"
import { StudyGroupToUser } from "../../entities/StudyGroupToUser";
import { User } from "../../entities/User";
import { AppDataSource } from "../../loaders/db"


export default async (userId : number) => {
	const studyGroupRepository = AppDataSource.getRepository(StudyGroup);
	const result =
	await studyGroupRepository.createQueryBuilder("study_group")
	.leftJoinAndSelect("study_group.users", "user")
	.where("user.id = :id", {id: userId})
	.getMany()

	console.log(result)
}