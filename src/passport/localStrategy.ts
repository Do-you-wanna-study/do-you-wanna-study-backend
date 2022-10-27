import passport from 'passport';
import passportLocal from 'passport-local'


const LocalStrategy = passportLocal.Strategy

const authData = {
	email : "mihnhyuk@naver.com",
	password: "1234"
}

export default () => {
	passport.use(new LocalStrategy(
		{
			usernameField: 'id',
			passwordField: 'pwd',
			session: true,
			passReqToCallback: false
		},
		function verify(username : any, password : any, done : Function) {
			if (username == authData.email){
				if (password == authData.password){
					console.log('success');
					return done(null, authData)
				}
				else{
					return done(null, false, {
						message: 'Incorrect password'
					})
				}
			}else{
				return done(null, false, {
					message: 'Incorrect username'
				})
			}
	}));
}