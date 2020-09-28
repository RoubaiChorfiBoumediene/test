//configure routes
const express = require('express');
const app = express();
const path = require('path');
const log = console.log;
const sendMail = require('./mail');
const PORT = 4200;
const http = require('http');
// https
fs = require('fs');
https = require('https');
// used to create response headers

//mysql
require('./config.js');
const emailController = require('./controllers/emailController.js');

//data parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//email, subject , text
app.post('/email', (req, res) => {
	//todo
	//send email
	const subject = req.body.subject;
	const email = req.body.email;
	const text = req.body.text;
	console.log('Data :', JSON.stringify(req.body));
	console.log(req.body.subject);

	sendMail(email, subject, text, function(err) {
		if (err) {
			throw err;
			res.status(500).json({ message: 'internal error' });
		} else {
			emailController.saveMail(req, res);
		}
	});
});

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(PORT, () => log('server is starting on port', PORT));
