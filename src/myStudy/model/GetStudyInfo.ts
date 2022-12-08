import { StudyGroupToUser } from "../../entities/StudyGroupToUser"
import { AppDataSource } from "../../loaders/db"


export default async (userId : number, studyId : number) => {
	return AppDataSource
	.getRepository(StudyGroupToUser)
	.find({
		where:{
			user:{
				id : userId
			},
			studyGroup:{
				id : studyId
			}
		},
		relations:{
			user : true
		},
		select :{
			user:{
				id : true,
				nickname : true
			}
		}
	})
	
}