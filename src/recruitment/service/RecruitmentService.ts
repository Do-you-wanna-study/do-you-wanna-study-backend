import getRecruitment from "../model/GetRecruitment"

export default async (community: number, filter: string, search?: string) => {
	const recruitmentList =  search === undefined ? await getRecruitment(community, filter) 
		: await getRecruitment(community, filter, search)
	console.log(recruitmentList)
	return recruitmentList
}