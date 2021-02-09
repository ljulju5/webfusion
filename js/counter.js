/* Counter */

let firstCount = document.querySelector("#firstCount");
let secondCount = document.querySelector("#secondCount");
let thirdCount = document.querySelector("#thirdCount");
let fourthCount = document.querySelector("#fourthCount");

let firstInt = parseInt(firstCount.innerHTML);
let secondInt = parseInt(secondCount.innerHTML);
let thirdInt = parseInt(thirdCount.innerHTML);
let fourthInt = parseInt(fourthCount.innerHTML);
let firstData = firstCount.dataset.num;
let secondData = secondCount.dataset.num;
let thirdData = thirdCount.dataset.num;
let fourthData = fourthCount.dataset.num;

const counter = (int, data, html) => {
    let cnt = "";
    if (data > 1000) {
        cnt = 0.1;
    } else if (data > 400 && data < 999) {
        cnt = 10;
    } else {
        cnt = 20;
    }
    setInterval(() => {
        if (int < data) {
            let count = int++;
            html.innerHTML = count + 1;
        }
    }, cnt);
};
let isRunning = true;
document.addEventListener("scroll", () => {
    if (scrollY >= 1900 && scrollY <= 1920) {
        if (isRunning) {
            counter(firstInt, firstData, firstCount);
            counter(secondInt, secondData, secondCount);
            counter(thirdInt, thirdData, thirdCount);
            counter(fourthInt, fourthData, fourthCount);
            console.log(123);
            isRunning = false;
        }
    }
});
const countertest = document.querySelector(".counter");

countertest.addEventListener("click", () => {
    console.log(window.pageYOffset);
    // if (document.body.children.contains("section.counter")) {
    //   console.log(123);
    //full 2284px
    // }
});