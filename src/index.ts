import express from 'express'
import router from './router'
import session from 'express-session'
import passport from 'passport'

var app =express();

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use(session({secret: 'keyboard cat'}));
app.use(passport.initialize())
app.use(passport.session())
app.use('/', router);


app.listen(3000, () => {
	console.log('Connected port 3000');
})
