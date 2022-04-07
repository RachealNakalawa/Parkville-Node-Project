const parkingPrice = {
	day: {
		truck: "5000",
		personalCar: "3000",
		taxi: "3000",
		coaster: "4000",
		bodaboda: "2000"
	},
	night: {
		truck: "10000",
		personalCar: "2000",
		taxi: "2000",
		coaster: "2000",
		bodaboda: "2000"
	},
	lessthanthree:  {
		truck: "2000",
		personalCar: "2000",
		taxi: "2000",
		coaster: "3000",
		bodaboda: "1000"
	}
}

const parkingPriceFinder = (parkingOption, carType) => {
	// let finalPrice = parkingPrice[parkingOption];
	// finalPrice = finalPrice[carType];
	// return finalPrice

	return parkingPrice[parkingOption][carType];
}


// Working with the elements

const selectedCarType = document.register.cartype;

const radios = document.register.parkingoption;

const totalCostInput = document.register.totalcost;

let calculatedPrice = "";


for(let i = 0; i < radios.length; i += 1) {
	radios[i].addEventListener('change', () => {
		if(selectedCarType.value != "default") {
			if (radios[i].checked) {
				calculatedPrice = parkingPriceFinder(radios[i].value, selectedCarType.value)
				totalCostInput.value = calculatedPrice;
			}
		}else {
			console.log("You have to select a car type")
		}
	})
}

selectedCarType.addEventListener('change', () => {
	let isRadioChecked = false;
	let checkedRadio = null;
	radios.forEach( singleRadio => {
		console.log(singleRadio);
		if (singleRadio.checked){
			isRadioChecked = true;
			checkedRadio = singleRadio;
		}
	})

	if (isRadioChecked == true) {
		calculatedPrice = parkingPriceFinder(checkedRadio.id, selectedCarType.value)
		totalCostInput.value = calculatedPrice;
	}
})