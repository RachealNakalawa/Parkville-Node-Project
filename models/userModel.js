const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const Schema  = mongoose.Schema;

const userSchema = new Schema({
	firstname: {
		type: String,
		required: true
	},
	lastname: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true,
	}
}, {timestamps: true});

userSchema.plugin(passportLocalMongoose, { usernameField: 'email'})

const User = mongoose.model('User', userSchema);

module.exports = User;