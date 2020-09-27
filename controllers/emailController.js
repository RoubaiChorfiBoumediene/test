var Email = require('../models/email');

module.exports.saveMail = (req, res) => {
	var email = req.body.email;
	var message = req.body.text;
	var subject = req.body.subject;

	newMail = new Email({ name: email, email: message, subject: subject })

	newMail.save((err, success) => {
		if (err) throw err;
		if (success) {
			res.json({ message: 'email sent' });
		}
	});
};
