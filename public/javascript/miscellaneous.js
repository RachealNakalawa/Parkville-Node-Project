const sideBarNavigator = () => {
	let windowLoc = window.location.pathname
	
	windowLoc = windowLoc.split('/');
	console.log(windowLoc)
	
	if (windowLoc.includes('parkings')) {
		document.querySelector('.dept-side-link').classList.add('active');
	}else {
		document.querySelector('.home-side-link').classList.add('active');
	}
}

window.addEventListener('load', sideBarNavigator);