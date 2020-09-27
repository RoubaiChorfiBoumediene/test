const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
require('dotenv').config();
console.log();
const auth = {
	auth: {
		api_key: process.env.KEYAPI,
		domain: process.env.DOMAIN
	}
};

const transporter = nodemailer.createTransport(mailGun(auth));

//changing subject and text
const sendMail = (email, subject, text, cb) => {
	const mailOptions = {
		from: email,
		to: 'b.roubaichorfi@esi-sba.dz',
		subject,
		text
	};

	transporter.sendMail(mailOptions, function(err, data) {
		if (err) {
			cb(err, null);
		} else {
			cb(null, data);
		}
	});
};
module.exports = sendMail;
