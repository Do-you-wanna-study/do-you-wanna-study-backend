import passport from 'passport';
const LocalStrategy = require('passport-local').Strategy


const authData = {
	email : 'mihnhyuk',
	password : '1234'
}

passport.serializeUser((user: any, done: Function) => {
	console.log("serialize", user)
	done(null, user.email);
})

passport.deserializeUser((user: any, done: Function) => {
	console.log("deserialize called", user)
	done(null, authData);
})

passport.use(new LocalStrategy(
	{
		usernameField: 'email',
		passwordField: 'password',
		session: true,
		passReqToCallback: false
	},
	function verify(username : any, password : any, done : Function) {
		console.log('LocalStragegy', username, password)
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

  export default passport