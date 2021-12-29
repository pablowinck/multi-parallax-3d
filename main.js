const bushes = document.getElementById("bushes");
const people = document.getElementById("people1");
const people2 = document.getElementById("people2");
const people3 = document.getElementById("people3");
const sky = document.getElementById("sky");
const water = document.getElementById("water");

document.addEventListener("scroll", function (e) {
  bushes.style.top = window.pageYOffset * 0.7 + "px";
  people.style.top = window.pageYOffset * 0.5 + "px";
  people2.style.top = window.pageYOffset * 0.4 + "px";
  sky.style.top = window.pageYOffset * 0.7 + "px";
  water.style.top = window.pageYOffset * 0.7 + "px";
});
