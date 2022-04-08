const express = require('express');
const path = require('path');
const morgan = require('morgan');
const expressLayouts = require('express-layout');
const mongoose =  require('mongoose');


const authRoutes = require('./routes/authRoutes');
const parkingRoutes = require('./routes/parkingRoutes');
const config = require('./config/database_config');

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
app.use(morgan('dev'));
app.use(expressLayouts());
app.use(express.urlencoded({extended: true}));

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