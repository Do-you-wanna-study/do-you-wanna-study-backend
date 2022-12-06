import { Community } from '../../entities/Community'
import { StudyGroup } from '../../entities/StudyGroup'
import {AppDataSource} from '../../loaders/db'

export default async (recruitmentId : number, groupName: string, community : Community, period: number, startDate: Date) => {
	const study = new StudyGroup()
	study.groupName = groupName
	study.community = community
	study.period = period
	study.startDate = startDate
	
	return await AppDataSource.manager.save(study)
}