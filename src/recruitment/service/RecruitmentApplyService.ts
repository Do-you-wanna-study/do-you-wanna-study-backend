import { ApplyToRecruitment } from "../model"

export default async (userId : number, recruitmentId : number, description : string) => {
	
	ApplyToRecruitment(userId, recruitmentId, description)
}