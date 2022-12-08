import { Community } from '../../entities/Community'
import { Recruitment } from '../../entities/Recruitment'
import { RecruitmentApply } from '../../entities/RecruitmentApply'
import { StudyGroup } from '../../entities/StudyGroup'
import { StudyGroupToUser } from '../../entities/StudyGroupToUser'
import {AppDataSource} from '../../loaders/db'

export default async (recruitmentId : number, groupName: string, community : Community, period: number, startDate: Date) => {
	const study = new StudyGroup()
	study.groupName = groupName
	study.community = community
	study.period = period
	study.startDate = startDate
	study.isFinished = false

	const recruitment = await AppDataSource
	.getRepository(Recruitment)
	.findOne({
		relations:{
			author: true
		},
		where:{
			id: recruitmentId,
		},
		select:{
			author: {
				id: true
			}
		}
	})
	const applies = await AppDataSource
	.getRepository(RecruitmentApply)
	.find({
		relations:{
			user: true
		},
		where :{
			recruitment:{
				id : recruitmentId
			},
			status: true
		},
		select:{
			user:{
				id: true
			}
		}
	})
	const members = []
	const leaderMem = await recruitment?.author
	if (leaderMem === undefined){
		return -1
	}
	members.push(leaderMem)
	for (const apply in applies){
		members.push(await applies[apply].user)
	}
	console.log(members)
	const studyUsers = []
	for (let i = 0 ; i < members.length ; i++ ){
		const studyUser = new StudyGroupToUser()
		if (i === 0){
			studyUser.role = 'leader'
		}else{
			studyUser.role = 'follower'
		}
		studyUser.studyGroup = study
		studyUser.user = members[i]
		studyUsers.push(studyUser)
	}
	await AppDataSource.manager.save(study)
	await AppDataSource.manager.save(studyUsers)
	return
	// return await AppDataSource.manager.save(study)
}