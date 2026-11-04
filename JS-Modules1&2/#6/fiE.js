"use strict";

const answer = confirm("Should I calculate the square root?");
let output;

if (answer == true) {
    const value = parseInt(prompt("Input number to calculate:"));
    if (value < 0) {
        output = "The square root of a negative number is not defined.";
    } else {
        output = "Square root of " + value + " is: " + Math.sqrt(value);
    }
} else {
    output = "The square root was not calculated.";
}

document.querySelector("#output").innerHTML = output;