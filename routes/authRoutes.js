const express = require('express');
const User = require('../models/userModel');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('authenticationForms/login')
})

router.get("/login", (req, res) => {
	res.redirect('/');
})

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