"use strict";

const firstNumber = document.getElementById("firstnumber"); //first input field
const secondNumber = document.getElementById("secondnumber"); //second input field
const calculateBtn = document.getElementById("calculate"); //calculate button
const operators = document.getElementById("operator"); //drop down list of mathematical operators
const results = document.getElementById("results"); //list of saved results

let num1; //first number
let num2; //second number
let result; //first and second number calculated
let selectedOperator; //the selected operator from the drop down list

//wait until the document is loaded to call the function
document.addEventListener("DOMContentLoaded", eventListeners);

//adds event listeners to elements
function eventListeners() {
  calculateBtn.addEventListener("click", readNumbers);
}

//read the numbers in the input fields
function readNumbers() {
  //parseFloat allows the user to input decimal numbers as opposed to parseInt
  num1 = parseFloat(firstNumber.value);
  num2 = parseFloat(secondNumber.value);

  //pass the assigned values to the calculate() function
  calculate(num1, num2);
}

//calculate the numbers with the values received from readNumbers()
function calculate(a, b) {
  //assign the selected operator
  selectedOperator = operators.options[operators.selectedIndex].value;

  //calculate with the selected operator
  switch (selectedOperator) {
    case "add":
      //console.log(a + b);
      result = a + b;
      break;

    case "sub":
      //console.log(a - b);
      result = a - b;
      break;

    case "mul":
      //console.log(a * b);
      result = a * b;
      break;

    case "div":
      //console.log(a / b);
      result = a / b;
      break;
  }
  saveHistory(result);
}

//save and append the result to the list
function saveHistory(result) {
  let savedResult = document.createElement("li");
  savedResult.textContent = result;
  results.appendChild(savedResult);
}
