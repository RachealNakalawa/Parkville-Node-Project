const someFunc = () => {
	let windowLoc = window.location.href;
	
	windowLoc = windowLoc.split('/');
	console.log(windowLoc)
	
	if (windowLoc.includes('parkings')) {
		document.querySelector('.dept-side-link').classList.add('active');
	}else {
		document.querySelector('.home-side-link').classList.add('active');
	}
}

window.addEventListener('load', someFunc);