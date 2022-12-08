import { StudyGroup } from "../../entities/StudyGroup"
import { StudyGroupToUser } from "../../entities/StudyGroupToUser"
import { AppDataSource } from "../../loaders/db"

export default async (studyId: number ) => {
	return await AppDataSource
	.getRepository(StudyGroupToUser)
	.find({
		where:{
			studyGroup: {
				id : studyId
			}
		},
		relations:{
			user: true
		},
		select:{
			user:{
				id : true
			}
		}
	})
}