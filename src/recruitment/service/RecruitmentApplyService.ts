import { ApplyToRecruitment } from "../model"

export default async (userId : number, recruitmentId : number, description : string) => {
	
	const result = await ApplyToRecruitment(userId, recruitmentId, description)
	if (result === -1){
		return false
	}else{
		return true
	}
}