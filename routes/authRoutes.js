const express = require('express');
const User = require('../models/userModel');
const router = express.Router();
const passport = require('passport');


// login a user
router.get('/', (req, res) => {
	res.render('authenticationForms/login')
})
// ---- incase someone uses the resource /login redirect them to /
router.get("/login", (req, res) => {
	res.redirect('/');
})

// passport provides the controller to handle loging in. So it will authenticate using the strategy it takes in, and respond or react based on the options it takes in as well. 
router.post('/login', passport.authenticate('local', {
	failureRedirect: "/",
	successRedirect: '/home'
}))


// signup a user
router.get("/signup", (req, res) => {
	//just to prove that you are simply calling a file
	res.render('authenticationForms/signup.ejs');
})

router.post("/signup", async (req, res) => {
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