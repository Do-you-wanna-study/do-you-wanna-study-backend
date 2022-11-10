import { StudyGroup } from "../../entities/StudyGroup"
import { StudyGroupToUser } from "../../entities/StudyGroupToUser";
import { User } from "../../entities/User";
import { AppDataSource } from "../../loaders/db"


export default (userId : number) => {
	const studyGroupRepository = AppDataSource.getRepository(StudyGroup);
	studyGroupRepository.find({
		relations:{
			
		}
	})
}