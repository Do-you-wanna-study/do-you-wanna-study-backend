import {Response, Request, NextFunction} from 'express'

const isLogin : Function = (req : Request , res : Response, next : NextFunction) =>{
	if (req.user){
		return true;
	}else{
		return false;
	}
}


const authCheck : Object = {
	isLogin
}

export default authCheck;