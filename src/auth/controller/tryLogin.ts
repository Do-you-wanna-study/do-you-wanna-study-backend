import passport from 'passport'

export default passport.authenticate('local', { 
	successRedirect: '/recruitment',
	failureRedirect: '/auth/login',
 })