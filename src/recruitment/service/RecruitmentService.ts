import getRecruitment from "../model/GetRecruitment"

export default async (community: number, filter: string, pageNumber: number, search?: string, ) => {
	const recruitmentList =  search === undefined ? await getRecruitment(community, pageNumber, filter ) 
		: await getRecruitment(community, pageNumber, filter, search)
	console.log(recruitmentList)
	return recruitmentList
}