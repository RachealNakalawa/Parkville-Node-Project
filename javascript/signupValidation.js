document.signup.firstname.focus();

const emailAffirmation = "We'll never share your email with anyone else."
const compName = /^[A-Z][a-z]{1,20}$/;

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



// ---- Validation Functions begin here -----

// validate First name
const validateFirstName = () => {
  let fname = document.signup.firstname;
  let errorLabel = document.querySelector(".fn-error");

  if (!(fname.value.match(compName))) {
    errorLabel.innerHTML = errorMessageProducer(fname.value, "First name should start with a capital letter and should be between 2 to 20 letters");
    errorLabel.style.display = "block";
		fname.style.borderColor = "red"
		fname.classList.add("shadow-none");
		fname.focus();
    return false;
  }

	fname.classList.remove("shadow-none");
	fname.style.borderColor = "lightgray"
  document.signup.lastname.focus();
  errorLabel.style.display = "none";
	return true;
};


// // validate Last name
const validateLastName = () => {
  let lname = document.signup.lastname;
  let errorLabel = document.querySelector(".ln-error");

  if (!lname.value.match(compName)) {
    errorLabel.innerHTML = errorMessageProducer(lname.value, "Second name should start with a capital letter and should be between 2 to 20 letters");
    errorLabel.style.display = "block";
		lname.style.borderColor = "red"
		lname.classList.add("shadow-none");
		lname.focus();
    return false;
  }
	lname.classList.remove("shadow-none");
	lname.style.borderColor = "lightgray"
  document.signup.email.focus();
  errorLabel.style.display = "none";
	return true;
};


// validate Email
const validateEmail = () => {
  let eml = document.signup.email;
	let comp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  let divLabel = document.querySelector("#emailHelp");

  if (!(eml.value.match(comp))) {
    divLabel.innerHTML = errorMessageProducer(eml.value, "Please provide a valid email");
		divLabel.style.color = "red";
		eml.style.borderColor = "red"
		eml.classList.add("shadow-none");
		eml.focus();
    return false;
  }

	eml.classList.remove("shadow-none");
	eml.style.borderColor = "lightgray"
  document.signup.password.focus();
  divLabel.innerHTML = emailAffirmation;
	divLabel.style.color = "gray";
	return true;
};

// validate Password

const validatePassword = () => {
  let pswd = document.signup.password;
  let comp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
  let errorLabel = document.querySelector(".pswd-error");

  if (!pswd.value.match(comp)) {
    errorLabel.innerHTML = errorMessageProducer(pswd.value, "Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character");
    errorLabel.style.display = "block";
		pswd.style.borderColor = "red";
		pswd.classList.add("shadow-none");
		pswd.focus();
    return false;
  }

	pswd.classList.remove("shadow-none");
	pswd.style.borderColor = "lightgray"
  document.signup.passwordconfirm.focus();
  errorLabel.style.display = "none";
	return pswd.value;
};

// validate Password Confirmation

const validatePasswordConfirmation = (a) => {
	let pswdConfirm = document.signup.passwordconfirm;
	let errorLabel = document.querySelector('.pswdConfirm-error');

	if (pswdConfirm.value !== a) {
		errorLabel.innerHTML = "Password Confirmation should match Password"
		errorLabel.style.display = "block";
		pswdConfirm.style.borderColor = "red";
		pswdConfirm.classList.add("shadow-none");
		pswdConfirm.focus();
		return false;
	}

	pswdConfirm.classList.remove("shadow-none");
	pswdConfirm.style.borderColor = "lightgray"
	pswdConfirm.blur();
	errorLabel.style.display= 'none';
	return true;
}
// ----- Validation Functions end here -----


let handleButtonClick = (e) => {

	let capturePassword = "";

	if (validateFirstName() == false) {
		//this prevent default here prevents the type submit button from doing its default action of submitting a form if i happen to get out of this function(handleButtonClick on onclick) when I find an error during validation
		e.preventDefault();
		return
	}

	if (validateLastName() == false) {
		e.preventDefault();
		return
	}

	if (validateEmail() == false) {
		e.preventDefault();
		return
	}

	if (validatePassword() == false) {
		e.preventDefault();
		return
	}else {
		capturePassword = validatePassword();
	}

	if (validatePasswordConfirmation(capturePassword) == false) {
		e.preventDefault();
		return;
	}
	console.log("I have come after validation");
}