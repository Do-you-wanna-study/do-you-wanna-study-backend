import passport from "passport";
import local from "./localStrategy";

export default () => {
	passport.serializeUser((user: any, done: Function) => {
		console.log("serialize!! : ", user)
		done(null, user);
	})
	
	passport.deserializeUser((user: any, done: Function) => {
		console.log("deserialize called", user)
		done(null, user);
	})
  //실행을 한번 시켜줘야 등록이 될 것이다.
  local();
};