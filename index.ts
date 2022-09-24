var express = require('express');
var router = require('./src/router/router');

var app =express();

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use('/')

app.listen(3000, () => {
	console.log('Connected port 3000');
})
