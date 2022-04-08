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

const editCarForm = (req, res) => {
	console.log(req.params.id);
	console.log(req.query);
	let requestedCar = null

	for(car of parkedCars){
		if(car.id == req.params.id) {
			requestedCar = {...car};
			break;
		}
	}
	console.log(requestedCar);
	res.render('parking/editParking', {requestedCar});
}

const editParkedCar = (req, res) => {
	console.log(req.query)
	console.log("The query id is ", req.query.id)
	res.redirect('/parkings');
}

module.exports = {
	homePage,
	parkingDashboard,
	registerCar,
	editCarForm,
	editParkedCar,
}