const express = require('express');
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

module.exports = router;