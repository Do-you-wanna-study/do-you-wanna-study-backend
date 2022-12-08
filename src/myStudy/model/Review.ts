import { StudyGroup } from "../../entities/StudyGroup"
import { StudyRetrospect } from "../../entities/StudyRetrospect"
import { User } from "../../entities/User"
import { AppDataSource } from "../../loaders/db"

export default async (inputData: { userId: number, studyId: number, content: string, evaluates: any }) => {
	const {userId, studyId, content, evaluates} = inputData
	
	const studyGroup = AppDataSource
	.getRepository(StudyGroup)
	.findOne({where:{id : studyId}})
	const user = AppDataSource
	.getRepository(User)
	.findOne({where:{id:userId}})
	const newReview = new StudyRetrospect()
	newReview.content = content
	// newReview.studyGroup = await studyGroup
	// newReview.user = await user
	
	// AppDataSource.manager.save(newReview)
}