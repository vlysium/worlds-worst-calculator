"use strict";

const firstNumber = document.getElementById("firstnumber"); //first input field
const secondNumber = document.getElementById("secondnumber"); //second input field
const calculateBtn = document.getElementById("calculate"); //calculate button

let num1; //first number
let num2; //second number

//wait until the document is loaded to call the function
document.addEventListener("DOMContentLoaded", eventListeners);

//adds event listeners to elements
function eventListeners() {
  calculateBtn.addEventListener("click", calculate);
}

//calculate two numbers
function calculate() {
  //console.log("calculating");
}
