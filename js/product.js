
/*Sticky Navbar*/


const nav=document.querySelector('nav');
const head=document.querySelector('header');
const pixel=window.innerHeight;

window.addEventListener('scroll', stick);

function stick() {
	
	if(window.scrollY> pixel) {
		
		nav.classList.add('sticky');
		
		console.log('ide');
	} 
	
	else {
		
		nav.classList.remove('sticky');
	}
}





/*Menu Js */

const menuBtn = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");
const closeBtn = document.querySelector("#close-btn");
const content=document.querySelector('.content');

menuBtn.addEventListener("click", () => {
  menu.style.transform = "translateX(0%)";
	
	

	
	 if(window.innerWidth < 768) {
    
		 content.style.display="none";
		 console.log('Work');
  }

});

closeBtn.addEventListener("click", () => {
  menu.style.transform = "translateX(100%)";
	
	
	
	  if(window.innerWidth<768) {
    
		  content.style.display="block";
  }
	
   
});



// Product animation 

const product1=document.querySelector('#p1');
const product2=document.querySelector('#p2');
const product3=document.querySelector('#p3');
const product4= document.querySelector('#p4');
const product5= document.querySelector('#p5');
const product6= document.querySelector('#p6');

product1.addEventListener('click', function() {
	
	product1.classList.toggle('animate');
	
}
 );

product2.addEventListener('click', function() {
	
	product2.classList.toggle('animate');
	
}
 );

product3.addEventListener('click', function() {
	
	product3.classList.toggle('animate');
	
}
 );

product4.addEventListener('click', function() {
	
	product4.classList.toggle('animate');
	console.log('Menjamo');
}
 );

product5.addEventListener('click', function() {
	
	product5.classList.toggle('animate');
	console.log('Menjamo');
}
 );

product6.addEventListener('click', function() {
	
	product6.classList.toggle('animate');
	console.log('Menjamo');
}
 );
