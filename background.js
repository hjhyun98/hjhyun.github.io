const images=[ "0.jpg","1.jpg","2.jpg","3.jpg","4.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${chosenImage}`;
bgImg.class = "hidden";


const body = document.querySelector("body");
body.style.backgroundImage = `url("${bgImg.src}")`