const express = require('express');
const path = require('path');
const morgan = require('morgan');
const expressLayouts = require('express-layout');
const mongoose =  require('mongoose');
const methodoverride = require('method-override');
const session = require('express-session');
const passport = require('passport');


const authRoutes = require('./routes/authRoutes');
const parkingRoutes = require('./routes/parkingRoutes');
const config = require('./config/database_config');
const User = require('./models/userModel');

//connecting to the database
mongoose.connect(config.database);
const db = mongoose.connection;
db.once('open',() =>{
	console.log('You are connected to mongodb')
});
db.on('error',(err) => {
	console.error(`connection error: ${err.message}`)
});

//instantiating
const app = express();
const portNumber = 3000

//configurations

//setting the view engine
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "/views"));
app.set("layouts", path.join(__dirname, "/views/layouts"));


//middleware
//setting directory for static files
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("dev"));
app.use(expressLayouts());
app.use(express.urlencoded({extended: true}));
app.use(methodoverride('_method'));
app.use(session({
	secret: 'rashiyeParkville',
	resave: false,
	saveUninitialized: false,
	// cookie: {maxAge: 60 * 60 * 1000}
}))

app.use(passport.initialize());
//connect passpport to session which is express-session
app.use(passport.session());
// tell it the strategy which is going to use the help of passport-local-mongoose
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



// routing

//authRoutes
app.use('/', authRoutes);

//parkingRoutes
app.use('/', parkingRoutes);

// 404

app.use((req, res) => {
	res.status(404).render('404');
})

//listen for requests
app.listen(portNumber);