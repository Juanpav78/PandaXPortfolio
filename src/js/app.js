

const important = document.querySelectorAll('.important');

important.forEach((recalc, idx) => {
	recalc.addEventListener('click', rotateImport => {
		rotateImport.target.classList.add('active');
	});

	
	recalc.addEventListener('animationend', rotateImport =>{
		rotateImport.target.classList.remove('active');
	});

	setTimeout(() => {
		recalc.classList.add('active');
	}, 750 * (idx+1))
});

