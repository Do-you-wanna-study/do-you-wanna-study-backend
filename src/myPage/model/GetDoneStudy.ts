import { Recruitment } from "../../entities/Recruitment";
import { RecruitmentApply } from "../../entities/RecruitmentApply";
import { StudyGroup } from "../../entities/StudyGroup";
import { StudyGroupToUser } from "../../entities/StudyGroupToUser";
import { AppDataSource } from "../../loaders/db";

export default async (userId : number) => {
	return await AppDataSource
	.getRepository(StudyGroupToUser)
	.find({
		where:{
			user: {
				id:userId
			},
			studyGroup: {
				isFinished: true
			}
		},
		relations:{
			studyGroup:true
		},
		select:{
			studyGroup : {
				groupName:true,
				startDate:true,
				period:true,
			}
		}
	})
}