const parkedCars = []


const homePage = (req, res) => {
	res.render('Home');
}

const parkingDashboard = (req, res)=> {
	res.render('parking/ParkingDashboard')
}

const registerCar = (req, res) => {
	console.log(req.body);
}

module.exports = {
	homePage,
	parkingDashboard,
	registerCar
}