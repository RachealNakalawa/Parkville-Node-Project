const mongoose = require('mongoose');

// let Schema = mongoose.Schema;

const parkingSchema = mongoose.Schema({
  drivername: {
    type: String,
    required: true,
  },
  telephone: {
    type: String,
    required: true,
  },
  cartype: {
    type: String,
    required: true,
  },
	drivernin: {
    type: String,
    required: false,
  },
  numberplate: {
    type: String,
    required: true,
  },
  carmodel: {
    type: String,
    required: true,
  },
	color: {
    type: String,
    required: true,
  },
  arrivaltime: {
    type: String,
    required: true,
  },
  arrivaldate: {
    type: String,
    required: true,
  },
	parkingoption: {
		type: String,
		required: true
	},
	totalcost: {
		type: Number,
    required: true,
	},
  recieptnumber: {
		type: String,
		required: true,
		unique: true,
		trim: true
	},
  signoffstatus: {
		type: String,
		default: 'open'
	},
  takername: {
		type: String,
		required: false,
		default: ''
	},
  signofftime: {
		type: String,
		required: false,
		default: ''
	},
	takertelephone: {
		type: String,
		required: false,
		default: ''
	},
	signoffdate: {
		type: String,
		required: false,
		default: ''
	},
	genderoption: {
		type: String,
		required: false,
		default: ''
	},
	takernin: {
		type: String,
		required: false,
		default: ''
	}
}, {timestamps: true})

const Parking = mongoose.model('Parking', parkingSchema);

module.exports = Parking;