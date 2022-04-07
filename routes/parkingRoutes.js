const express = require('express');
//The commented line below does something called "Destructuring" in javascript
// const { homePage, parkingDashboard } = require('../controllers/parkingController');
const parkingController = require('../controllers/parkingController');
const router = express.Router();


router.get('/home', parkingController.homePage)
router.get('/parkings', parkingController.parkingDashboard)
router.post('/parkings', parkingController.registerCar)
router.get('/edit/:id', parkingController.editParkedCar);

module.exports = router;