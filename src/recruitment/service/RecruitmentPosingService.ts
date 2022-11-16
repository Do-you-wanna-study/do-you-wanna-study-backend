import {NewRecruitment} from '../model'

export default async (data: any, userInfo: any) => {
	console.log(await NewRecruitment(data, userInfo))
}