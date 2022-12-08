import { StudyGroupToUser } from "../../entities/StudyGroupToUser"
import { AppDataSource } from "../../loaders/db"

export default async (userId: number, studyId: number ) => {
	return AppDataSource
	.getRepository(StudyGroupToUser)
	.findOne({
		where:{
			role: 'leader',
			user:{
				id: userId
			}
		}
	})
}