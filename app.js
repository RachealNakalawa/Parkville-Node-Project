const express = require('express');
const path = require('path');
const morgan = require('morgan');

//instantiating
const app = express();
const portNumber = 3000

//configurations

//setting the view engine
app.set('view engine', 'ejs');

//setting directory for static files
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan('dev'));


//middleware

// routing
app.get('/', (req, res) => {
	res.render('authenticationForms/login')
})

app.get('/home', (req, res) => {
	res.render('Home')
})

//listen for requests
app.listen(portNumber);