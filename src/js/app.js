document.addEventListener('DOMContentLoaded', function(){
    day2();
	Darkmode();
	notDisponible();
});

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


 function day2(){
	const botonDay2 = document.querySelector('.ico');
	botonDay2.addEventListener('click', animationDay2);
}

function animationDay2(){
	const botonDay2 = document.querySelector('.ico');
	botonDay2.classList.toggle('active');
	botonDay2.classList.remove('no-animation');
} 

//Particulas 
let configParticles ={"particles":{"number":{"value":183,"density":{"enable":true,"value_area":561.194221302933}},"color":{"value":"#00735c"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":10,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6.313181133058181,"direction":"top","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":59.94005994005994,"size":0,"duration":0.959040959040959,"opacity":0,"speed":3},"repulse":{"distance":175.82417582417582,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true};

let color=configParticles.particles.color.value;
// Darkmode

function Darkmode(){
	const botonDark = document.getElementById("boton-dark");
	botonDark.addEventListener('click', btnDarkmode);
	if((botonDark.classList.contains("fa-sun"))==true){
		configParticles.particles.color.value = "#000";
		particlesJS("particles-js", configParticles);
	}else{
		configParticles.particles.color.value = "#00735c";
		particlesJS("particles-js", configParticles);
	}
	
}
function btnDarkmode(){
	const Dark = document.querySelector("body");
	const botonDark = document.getElementById("boton-dark");
	Dark.classList.toggle('dark');
	botonDark.classList.toggle('fa-moon');
	botonDark.classList.toggle('fa-sun');
	
	
}

function notDisponible(){
	const Dont = document.querySelectorAll(".not");
	var numero = Dont.length;

	for(i=0; i<numero; i++ ){
		Dont[i].addEventListener('click', alertNot);
	}
	
}

function alertNot(){
	alert('No esta disponible temporalmente')
}