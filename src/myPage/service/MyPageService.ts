import { GetDoneStudy, GetMyApply, GetMyGrade } from "../model"
import { util, statusCode } from "../../modules"

export default async (userId : number) => {
	const grade = await GetMyGrade(userId)
	const myApply = await GetMyApply(userId)
	const doneStudy = await GetDoneStudy(userId)
	// console.log(grade)
	// console.log(myApply)
	// console.log(doneStudy)
	const avgGrade = {
		skill: Number((parseFloat(grade.skill_sum) / parseFloat(grade.skill_count)).toFixed(1)),
		kindness: Number((parseFloat(grade.kindness_sum) / parseFloat(grade.kindness_count)).toFixed(1)),
		sincerity: Number((parseFloat(grade.sincerity_sum) / parseFloat(grade.sincerity_count)).toFixed(1)),
		helpful: Number((parseFloat(grade.helpful_sum) / parseFloat(grade.helpful_count)).toFixed(1)),
	}
	let sum = avgGrade.skill + avgGrade.kindness + avgGrade.sincerity + avgGrade.helpful
	sum /= 4
	sum = Number(sum.toFixed(1))
	Object.assign(avgGrade, {total: sum})
	return util.success(statusCode.OK, "mypage data", {grade: avgGrade, apply: myApply, doneStudy: doneStudy})
}