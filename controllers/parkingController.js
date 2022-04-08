const Parking = require('../models/parkingModel');

const parkedCars = [];

const homePage = (req, res) => {
	res.render('Home');
}


//Fetch all parked cars
const parkingDashboard = async (req, res)=> {
	// respond with the file, and the variables available to it (the object keys)
	try {
		let parkedCars =  await Parking.find({}).sort({createdAt: -1});
		console.log(parkedCars)
		res.render('parking/ParkingDashboard', {data: parkedCars})
	}catch (err){	
		console.error(err);
	}
}


//Park a car
const registerCar = async(req, res) => {

	try {
		let recieptnumber = Date.now().toString(36);
		let storedCar = {...req.body, recieptnumber};

		let car = new Parking(storedCar);

		await car.save();

		console.log("Your data has been successfully saved to database")
		res.redirect('/parkings');
	}catch (err) {
		console.error(err);
	}
}


//Editing a car
const editCarForm = async(req, res) => {
	console.log(req.params.id);
	let requestedCar = null

	try {

		requestedCar = await Parking.findById(req.params.id)
		console.log(requestedCar);
		res.render('parking/editParking', {requestedCar});

	}catch (err) {
		console.error(err);
	}
}

const editParkedCar = async(req, res) => {
	
	try {
		await Parking.findByIdAndUpdate(req.query.id, req.body);
		res.redirect('/parkings');
	}catch(err) {
		console.error(err);
	}
}

module.exports = {
	homePage,
	parkingDashboard,
	registerCar,
	editCarForm,
	editParkedCar,
}