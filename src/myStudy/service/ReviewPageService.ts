import { statusCode, util } from "../../modules"
import { GetStudyInfo } from "../model"


export default async (userId : number, studyId :number) => {
	const result = await GetStudyInfo(userId, studyId)
	return util.success(statusCode.OK, "success", result)
}