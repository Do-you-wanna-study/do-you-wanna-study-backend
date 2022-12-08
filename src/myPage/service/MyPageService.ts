import { GetDoneStudy, GetMyApply, GetMyGrade } from "../model"
import { util, statusCode } from "../../modules"

export default async (userId : number) => {
	const grade = await GetMyGrade(userId)
	const myApply = await GetMyApply(userId)
	const doneStudy = await GetDoneStudy(userId)
	// console.log(grade)
	// console.log(myApply)
	console.log(doneStudy)
	const avgGrade = {
		skill: parseFloat(grade.skill_sum) / parseFloat(grade.skill_count),
		kindness: parseFloat(grade.kindness_sum) / parseFloat(grade.kindness_count),
		sincerity: parseFloat(grade.sincerity_sum) / parseFloat(grade.sincerity_count),
		helpful: parseFloat(grade.helpful_sum) / parseFloat(grade.helpful_count),
	}
	let sum = avgGrade.skill + avgGrade.kindness + avgGrade.sincerity + avgGrade.helpful
	sum /= 4
	Object.assign(avgGrade, {total: sum})
	return util.success(statusCode.OK, "mypage data", {grade: avgGrade, apply: myApply, doneStudy: doneStudy})
}