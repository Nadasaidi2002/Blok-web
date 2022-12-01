// JavaScript Document
console.log("hi");

var menuknop= document.querySelector("header button");
    
menuknop.addEventListener("click", menuopenen);

function menuopenen(){
 var menulist = document.querySelector("header nav");
  menulist.classList.toggle("open")
}

var deMenuButton = document.querySelector("header button");

deMenuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
	deMenuButton.classList.toggle("open");
}