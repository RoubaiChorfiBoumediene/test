const mongoose = require('mongoose');
var mailSchema = mongoose.Schema({
	name: String,
	email: String,
	subject: String
});
var Email = (module.exports = mongoose.model('email', mailSchema));
