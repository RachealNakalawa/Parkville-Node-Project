const express = require('express');
const path = require('path');
const morgan = require('morgan');

//instantiating
const app = express();
const portNumber = 3000

//configurations

//setting the view engine
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "/views"));

//setting directory for static files
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan('dev'));


//middleware

// routing

app.get('/', (req, res) => {
	res.render('authenticationForms/login')
})

app.get("/login", (req, res) => {
	res.redirect('/');
})

app.get("/signup", (req, res) => {
	res.render('authenticationForms/signup');
})

app.get('/home', (req, res) => {
	res.render('Home')
})

app.get('/parkings', (req, res)=> {
	res.render('parking/ParkingHome')
})


// 404

app.use((req, res) => {
	res.status(404).render('404');
})

//listen for requests
app.listen(portNumber);