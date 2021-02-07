/*Sticky Navbar*/

const nav = document.querySelector("nav");
const head = document.querySelector("header");
const pixel = window.innerHeight;

window.addEventListener("scroll", stick);

function stick() {
  if (window.scrollY > pixel) {
    nav.classList.add("sticky");

    console.log("ide");
  } else {
    nav.classList.remove("sticky");
  }
}

/*Menu Js */

const menuBtn = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");
const closeBtn = document.querySelector("#close-btn");
const content = document.querySelector(".content");

menuBtn.addEventListener("click", () => {
  menu.style.transform = "translateX(0%)";

  if (window.innerWidth < 768) {
    content.style.display = "none";
    console.log("Work");
  }
});

closeBtn.addEventListener("click", () => {
  menu.style.transform = "translateX(100%)";

  if (window.innerWidth < 768) {
    content.style.display = "block";
  }
});

//Technology Cards

const cards = document.querySelectorAll("#card");
cards.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("is-flipped");
  });
});

//test
