import { StudyGroupToUser } from "../../entities/StudyGroupToUser"
import { AppDataSource } from "../../loaders/db"


export default (userId : number) => {
	return AppDataSource
	.getRepository(StudyGroupToUser)
	.find({
		where:{
			user:{
				id : userId
			}
		},
		relations:{
			studyGroup : {
				community:true
			},			
		}
	})
	
}