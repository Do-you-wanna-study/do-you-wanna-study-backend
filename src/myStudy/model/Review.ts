import { RecruitmentApply } from "../../entities/RecruitmentApply"
import { StudyGroup } from "../../entities/StudyGroup"
import { StudyGroupToUser } from "../../entities/StudyGroupToUser"
import { StudyRetrospect } from "../../entities/StudyRetrospect"
import { User } from "../../entities/User"
import { UserEvaluation } from "../../entities/UserEvaluation"
import { AppDataSource } from "../../loaders/db"

export default async (inputData: any) => {
	const {userId, studyId, content, evaluates} = inputData
	
	const studyGroup = new StudyGroup()
	studyGroup.id = studyId
	
	const user = new User()
	user.id = userId

	if (( studyGroup) === null || ( user) === null){
		return -1
	}

	const newReview = new StudyRetrospect()
	newReview.content = content
	newReview.studyGroup = studyGroup
	newReview.user = user

	AppDataSource.manager.save(newReview)

	AppDataSource
	.createQueryBuilder()
	.update(StudyGroupToUser)
	.set({"is_reviewed": true})
	.where("study_group_id = :id", {id: studyId})
	.andWhere("user_id = :id", {id : userId})
	.execute()

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