"use strict";

const year = parseInt(prompt("Please, input a year:"));
let output;

if (year % 100 == 0) {
    if (year % 400 == 0) {
        output = " is a leap year! (divisible by 100 and 400)"
    } else {
        output = " is not a leap year! (divisible by 100, but not with 400)"
    }
} else if (year % 4 == 0) {
    output = " is a leap year! (divisible by four)"
} else {
    output = " is not a leap year! (not divisible by four)"
}

document.querySelector("#output").innerHTML = 
    "The year " + year + output;

