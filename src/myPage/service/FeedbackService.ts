import { util, statusCode } from "../../modules"
import { GetFeedback } from "../model"

export default async (userId : number) => {
	const feedback = await GetFeedback(userId)
	console.log(feedback)
	return util.success(statusCode.OK, "feedback ok", feedback)
}