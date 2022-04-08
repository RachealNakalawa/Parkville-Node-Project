const express = require('express');
//The commented line below does something called "Destructuring" in javascript
// const { homePage, parkingDashboard } = require('../controllers/parkingController');
const parkingController = require('../controllers/parkingController');
const router = express.Router();


router.get('/home', parkingController.homePage)
router.get('/parkings', parkingController.parkingDashboard)
router.post('/parkings', parkingController.registerCar)
router.get('/edit/:id', parkingController.editCarForm);
router.post('/edit', parkingController.editParkedCar);
router.post('/signoffcar', parkingController.signOffCar);
router.delete('/deletecar/:id', parkingController.deleteCar);

module.exports = router;