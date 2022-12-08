import { StudyGroup } from "../../entities/StudyGroup"
import { AppDataSource } from "../../loaders/db"


export default async (studyId : number) => {
	const study = await AppDataSource
	.getRepository(StudyGroup)
	.findOne({
		where:{
			id : studyId
		}
	})
	if (study !== null){
		study.isFinished = true
		return study.save()
	}else{
		return -1
	}
	
}