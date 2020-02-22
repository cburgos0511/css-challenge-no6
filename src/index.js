const search = document.querySelector(".search");
const square = document.querySelector(".square");
const navbtn = document.querySelector(".nav-btn");
const menu = document.querySelector(".menu");
const container = document.querySelector(".container");

function toggleSearch() {
  console.log("working");
  search.classList.toggle("active");
}

function toggleMenu() {
  menu.classList.toggle("show");
  container.classList.toggle("move");
}

square.onclick = toggleSearch;
navbtn.onclick = toggleMenu;
