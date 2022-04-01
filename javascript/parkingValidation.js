const plateComp = /^[U][A-Z]{2}\d{3}[A-Z]{1}$/ //Number plate 
const nameComp = /^[A-Z][a-z]{1,20}\W[A-Z][a-z]{1,20}$/ //name
const carComp = /^[A-Za-z]{1,20}$/; //carmodel and color
const ninComp = /^[C][F|M]\d{7}[A-HJ-NP-Z]{2}\d{1}[A-HJ-NP-Z]{2}$/; //NIN
const phoneComp = "^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$"
const newPhoneComp = /^[0][7]\d{2}\d{6}$/
const generalComp = /^[a-zA-Z]{3,}$/;

const carType = document.register.cartype;
// Function to determine error message
const errorMessageProducer = (value, secondErrorMessage) => {
	let errorMessage = ""
	if (value == "") {
		errorMessage = "Field should not be empty"
	}else{
		errorMessage = secondErrorMessage;
	}
	return errorMessage;
}

const validateName = () => {
	const driverName = document.register.drivername;
	const errorLabel = document.querySelector(".dn-error");

	if(!(driverName.value.match(nameComp))) {
		errorLabel.textContent = errorMessageProducer(driverName.value, "This field requires 2 names, each name should start with a capital letter, should be seperated by a space, and should not be more than 20 letters");
		driverName.classList.add('shadow-none');
		driverName.style.borderColor = 'red';
		driverName.focus();
		return false;
	}

	errorLabel.textContent = "";
	driverName.classList.remove('shadow-none');
	driverName.style.borderColor = 'lightgray';
	document.register.telephone.focus();
	return true;
}

const validatePhone = () => {
	const phone = document.register.telephone;
	const errorLabel = document.querySelector(".tel-error");

	if(!(phone.value.match(newPhoneComp))) {
		errorLabel.textContent = errorMessageProducer(phone.value, "Phone number should start with 0 and should be a valid Ugandan number");
		phone.classList.add('shadow-none');
		phone.style.borderColor = 'red';
		phone.focus();
		return false;
	}

	errorLabel.textContent = "";
	phone.classList.remove('shadow-none');
	phone.style.borderColor = 'lightgray';
	document.register.cartype.focus();
	return true;
}

const validateCarType = () => {
	const errorLabel = document.querySelector(".cartype-error");

	if(carType.value == "default") {
		errorLabel.textContent = "Please select a car type";
		carType.classList.add('shadow-none');
		carType.style.borderColor = 'red';
		carType.focus();
		return false;
	}

	errorLabel.textContent = "";
	carType.classList.add('shadow-none');
	carType.style.borderColor = 'lightgray';
	document.register.drivernin.focus();
	return true;
}

const validateNin = () => {
	const driverNin = document.register.drivernin;
	const errorLabel = document.querySelector(".nin-error");

	if(!(driverNin.value.match(ninComp))) {
		errorLabel.textContent = errorMessageProducer(driverNin.value, "Enter a valid nin and should be 14 characters long");
		driverNin.classList.add('shadow-none');
		driverNin.style.borderColor = 'red';
		driverNin.focus();
		return false;
	}

	errorLabel.textContent = "";
	driverNin.classList.remove('shadow-none');
	driverNin.style.borderColor = 'lightgray';
	document.register.numberplate.focus();
	return true;
}

const validateNumberPlate = () => {
	const plate = document.register.numberplate;
	const errorLabel = document.querySelector(".plate-error");

	if(!(plate.value.match(plateComp))) {
		errorLabel.textContent = errorMessageProducer(plate.value, "Number plate should start with the letter U, and should be a valid Ugandan number plate e.g UBL222C");
		plate.classList.add('shadow-none');
		plate.style.borderColor = 'red';
		plate.focus();
		return false;
	}

	errorLabel.textContent = "";
	plate.classList.remove('shadow-none');
	plate.style.borderColor = 'lightgray';
	document.register.carmodel.focus();
	return true;
}

const validateCarModel = () => {
	const carModel = document.register.carmodel;
	const errorLabel = document.querySelector(".model-error");

	if(!(carModel.value.match(generalComp))) {
		errorLabel.textContent = errorMessageProducer(carModel.value, "Car model should be atleast 3 characters");
		carModel.classList.add('shadow-none');
		carModel.style.borderColor = 'red';
		carModel.focus();
		return false;
	}

	errorLabel.textContent = "";
	carModel.classList.remove('shadow-none');
	carModel.style.borderColor = 'lightgray';
	document.register.color.focus();
	return true;
}

const validateColor = () => {
	const carColor = document.register.color;
	const errorLabel = document.querySelector(".color-error");

	if(!(carColor.value.match(generalComp))) {
		errorLabel.textContent = errorMessageProducer(carColor.value, "Color should be atleast 3 characters");
		carColor.classList.add('shadow-none');
		carColor.style.borderColor = 'red';
		carColor.focus();
		return false;
	}

	errorLabel.textContent = "";
	carColor.classList.remove('shadow-none');
	carColor.style.borderColor = 'lightgray';
	document.register.arrivaltime.focus();
	return true;
}

const validateArrivalTime = () => {
	const arrivalTime = document.register.arrivaltime;
	const errorLabel = document.querySelector(".time-error");

	if((arrivalTime.value == "")) {
		errorLabel.textContent = "Time is required";
		arrivalTime.classList.add('shadow-none');
		arrivalTime.style.borderColor = 'red';
		arrivalTime.focus();
		return false;
	}

	errorLabel.textContent = "";
	arrivalTime.classList.remove('shadow-none');
	arrivalTime.style.borderColor = 'lightgray';
	document.register.arrivaldate.focus();
	return true;
}

const validateArrivalDate = () => {
	const arrivalDate = document.register.arrivaldate;
	const errorLabel = document.querySelector(".date-error");

	if((arrivalDate.value == "")) {
		errorLabel.textContent = "Date is required";
		arrivalDate.classList.add('shadow-none');
		arrivalDate.style.borderColor = 'red';
		arrivalDate.focus();
		return false;
	}

	errorLabel.textContent = "";
	arrivalDate.classList.remove('shadow-none');
	arrivalDate.style.borderColor = 'lightgray';
	return true;
}

const validateRadios = () => {
	let radioButtons = document.register.parkingoption;
	const errorLabel = document.querySelector(".radio-error");
	let anyRadioChecked = false;

	radioButtons.forEach( singleRadio => {
		if (singleRadio.checked) {
			anyRadioChecked = true;
		}
	});

	if(anyRadioChecked == false) {
		errorLabel.textContent = "You must select a parking option";
		return false;
	}

	errorLabel.textContent = ""
	return true;
}

// The validation function

const validateRegister = (e) => {
	if(!validateName()) {
		e.preventDefault();
		return
	}

	if(!validatePhone()) {
		e.preventDefault();
		return
	}

	if(!validateCarType()) {
		e.preventDefault();
		return
	}

	if(carType.value == "bodaboda" && !validateNin()) {
		e.preventDefault();
		return
	}

	if(!validateNumberPlate()) {
		e.preventDefault();
		return
	}

	if(!validateCarModel()) {
		e.preventDefault();
		return
	}

	if(!validateColor()) {
		e.preventDefault();
		return
	}

	if(!validateArrivalTime()) {
		e.preventDefault();
		return
	}

	if(!validateArrivalDate()) {
		e.preventDefault();
		return
	}

	if(!validateRadios()) {
		e.preventDefault();
		return
	}
}