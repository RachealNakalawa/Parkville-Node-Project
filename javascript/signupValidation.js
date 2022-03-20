document.signup.firstName.focus();

const emailAffirmation = "We'll never share your email with anyone else."


// ---- Validation Functions begin here -----

// validate First name
const validateFirstName = () => {
  let fname = document.signup.firstName;
  let comp = /^[a-zA-Z]+$/;
  let errorLabel = document.querySelector(".fn-error");

  if (!(fname.value.match(comp))) {
    errorLabel.innerHTML = "Invalid First Name";
    errorLabel.style.display = "block";
		fname.focus();
    return false;
  }
  document.signup.lastName.focus();
  errorLabel.style.display = "none";
	return true;
};


// // validate Last name
const validateLastName = () => {
  let lname = document.signup.lastName;
  let comp = /^[a-zA-Z]+$/;
  let errorLabel = document.querySelector(".ln-error");

  if (!lname.value.match(comp)) {
    errorLabel.innerHTML = "Invalid Last Name";
    errorLabel.style.display = "block";
		lname.focus();
    return false;
  }
  document.signup.email1.focus();
  errorLabel.style.display = "none";
	return true;
};


// validate Email
const validateEmail = () => {
  let eml = document.signup.email1;
	let comp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  let divLabel = document.querySelector("#emailHelp");

  if (!(eml.value.match(comp))) {
    divLabel.innerHTML = "Invalid Email";
		divLabel.style.color = "red";
		eml.focus();
    return false;
  }
  document.signup.passwordName.focus();
  divLabel.innerHTML = emailAffirmation;
	divLabel.style.color = "gray";
	return true;
};

// validate Password

const validatePassword = () => {
  let pswd = document.signup.passwordName;
  let comp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
  let errorLabel = document.querySelector(".pswd-error");

  if (!pswd.value.match(comp)) {
    errorLabel.innerHTML = "Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character";
    errorLabel.style.display = "block";
		pswd.focus();
    return false;
  }
  document.signup.passwordCon.focus();
  errorLabel.style.display = "none";
	return pswd.value;
};

const validatePasswordConfiramtion = (a) => {
	let pswdConfirm = document.signup.passwordCon;
	let errorLabel = document.querySelector('.pswdConfirm-error');

	if (pswdConfirm.value !== a) {
		errorLabel.innerHTML = "Password Confirmation should match Password"
		errorLabel.style.display = "block";
		pswdConfirm.focus();
		return false;
	}

	pswdConfirm.blur();
	errorLabel.style.display= 'none';
	return true;
}
// ----- Validation Functions end here -----


let handleButtonClick = (e) => {

	let capturePassword = "";

	if (validateFirstName() == false) {
		//this prevent default here prevents the type submit button from doing its default action of submitting a form had i gotten out of this function(handleButtonClick on onclick) when I find an error during validation
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

	if (validatePasswordConfiramtion(capturePassword) == false) {
		e.preventDefault();
		return;
	}
	console.log("I have come after validation");

}