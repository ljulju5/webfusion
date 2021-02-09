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
const card1 = document.querySelector("#card-2");
cards.forEach(card => {
  const card2 = document.querySelector("#card-3");
  card.addEventListener("click", () => {
    const card3 = document.querySelector("#card-4");
    card.classList.toggle("is-flipped");

  });
});
