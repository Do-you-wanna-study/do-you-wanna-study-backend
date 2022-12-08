import { StudyGroupToUser } from "../../entities/StudyGroupToUser"
import { AppDataSource } from "../../loaders/db"

export default async (studyId: number) => {
	return AppDataSource
	.getRepository(StudyGroupToUser)
	.findOne({
		where:{
			role: 'leader'
		}
	})
}