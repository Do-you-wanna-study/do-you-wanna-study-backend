import { GetLeader, EndMyStudy } from "../model"
import { statusCode, util } from "../../modules"

export default async (userId : number, studyId: number) => {
	const leader = await GetLeader(userId, studyId)
	if (leader === undefined){
		return util.fail(statusCode.BAD_REQUEST, "unauthorized user")
	}else{
		if (await EndMyStudy(studyId) === -1){
			return util.fail(statusCode.DB_ERROR, "can't find the study")
		}else{
			return util.success(statusCode.OK, "success")
		}
	}

}