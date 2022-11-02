import {NewRecruitment} from '../model'

export default async (data: any, userInfo: any) => {
	// if (data.tilte === null){
	// 	return
	// }
	NewRecruitment(data, userInfo)
}