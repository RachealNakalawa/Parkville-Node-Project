const express = require('express');
const User = require('../models/userModel');
const router = express.Router();
const passport = require('passport');
const connectEnsureLoggedIn = require('connect-ensure-login');


// login a user
router.get('/', connectEnsureLoggedIn.ensureLoggedOut('/home'), (req, res) => {
	res.render('authenticationForms/login')
})

// ---- incase someone uses the resource /login redirect them to /
router.get("/login", connectEnsureLoggedIn.ensureLoggedOut('/home'), (req, res) => {
	res.redirect('/');
})

// passport provides the controller to handle loging in. So it will authenticate using the strategy it takes in, and respond or react based on the options it takes in as well. 
router.post('/login',connectEnsureLoggedIn.ensureLoggedOut('/home'),  passport.authenticate('local', {
	failureRedirect: "/",
	successRedirect: '/home'
}))


// signup a user
router.get("/signup", connectEnsureLoggedIn.ensureLoggedOut('/home'),(req, res) => {
	//just to prove that you are simply calling a file
	res.render('authenticationForms/signup.ejs');
})

router.post("/signup", connectEnsureLoggedIn.ensureLoggedOut('/home'),async (req, res) => {
	try {
		let userExistance = await User.findOne({email: req.body.email});
		if(userExistance) {
			res.send("Email already exists");
		}else {
			let newUser = new User(req.body);
			await User.register(newUser, req.body.password, (err) => {
				if(err) {
					res.send('We could create a user, Please try again later');
				}else{
					res.redirect('/');
				}
			})
		}
	}catch(err) {
		console.error(err)
	}
})

module.exports = router;