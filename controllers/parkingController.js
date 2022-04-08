const parkedCars = [{
	id: "1",
  drivername: 'Racheal Nakalawa',
  telephone: '0774176973',
  cartype: 'coaster',
  drivernin: '',
  numberplate: 'UBL947C',
  carmodel: 'Subaru',
  color: 'black',
  arrivaltime: '16:24',
  arrivaldate: '2022-04-07',
  parkingoption: 'night',
  totalcost: '3000',
  recieptnumber: 'l1ozcbrp',
  signoffstatus: 'open',
  takername: '',
  signofftime: ''
}]

// const parkedCars = []


const homePage = (req, res) => {
	res.render('Home');
}

const parkingDashboard = (req, res)=> {
	// respond with the file, and the variables available to it (the object keys)
	res.render('parking/ParkingDashboard', {data: parkedCars})
}

const registerCar = (req, res) => {


	let recieptnumber = Date.now().toString(36);
	let signoffstatus = 'open'
	let takername = ""
	let signofftime = ""

	let car = {...req.body, recieptnumber, signoffstatus, takername, signofftime }
	console.log(car);
	parkedCars.push(car);
	res.redirect('/parkings')
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