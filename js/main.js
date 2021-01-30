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
/* Counter */

let firstCount = document.querySelector("#firstCount");
let secondCount = document.querySelector("#secondCount");
let thirdCount = document.querySelector("#thirdCount");

let firstInt = parseInt(firstCount.innerHTML);
let secondInt = parseInt(secondCount.innerHTML);
let thirdInt = parseInt(thirdCount.innerHTML);
let firstData = firstCount.dataset.num;
let secondData = secondCount.dataset.num;
let thirdData = thirdCount.dataset.num;

const counter = (int, data, html) => {
  setInterval(() => {
    if (int < data) {
      let cnt = int++;
      html.innerHTML = cnt + 1;
    }
  }, 5);
};

document.addEventListener("scroll", () => {
  if (pageYOffset == 1500) {
    counter(firstInt, firstData, firstCount);
    counter(secondInt, secondData, secondCount);
    counter(thirdInt, thirdData, thirdCount);
    console.log(123);
  }
});
