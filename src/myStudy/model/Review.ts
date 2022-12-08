import { StudyGroup } from "../../entities/StudyGroup"
import { StudyRetrospect } from "../../entities/StudyRetrospect"
import { User } from "../../entities/User"
import { UserEvaluation } from "../../entities/UserEvaluation"
import { AppDataSource } from "../../loaders/db"

export default async (inputData: any) => {
	const {userId, studyId, content, evaluates} = inputData
	
	// const studyGroup = await AppDataSource
	// .getRepository(StudyGroup)
	// .findOne({where:{id : studyId}})
	// const user = await AppDataSource
	// .getRepository(User)
	// .findOne({where:{id:userId}})
	
	const studyGroup = new StudyGroup()
	studyGroup.id = studyId
	// await AppDataSource.manager.save(studyGroup)

	const user = new User()
	user.id = userId
	// await AppDataSource.manager.save(user)

	const newReview = new StudyRetrospect()
	newReview.content = content
	if (( studyGroup) === null || ( user) === null){
		return -1
	}
	newReview.studyGroup = studyGroup
	newReview.user = user
	console.log(newReview)
	AppDataSource.manager.save(newReview)

	for (let i = 0 ; i < evaluates.length ; i++){
		const toUser = new User()
		toUser.id = parseInt(evaluates[i].userId)
		const newEvaluate = new UserEvaluation()
		newEvaluate.content = evaluates[i].content
		newEvaluate.toUser = toUser
		newEvaluate.fromUser = user
		newEvaluate.skill = parseInt(evaluates[i].skill)
		newEvaluate.kindness = parseInt(evaluates[i].kindness)
		newEvaluate.sincerity = parseInt(evaluates[i].sincerity)
		newEvaluate.helpful = parseInt(evaluates[i].helpful)
		AppDataSource.manager.save(newEvaluate)
	}
	return	
}