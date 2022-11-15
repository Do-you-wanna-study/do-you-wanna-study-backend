import getRecruitment from "../model/GetRecruitment"

export default async (community: number, filter: string) => {
	const recruitmentList = await getRecruitment(community, filter)
	console.log(recruitmentList)
	return recruitmentList
}