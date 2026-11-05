"use strict";

let numbers = [];

let number = prompt("Input a number:");
numbers.push(parseInt(number));

while(parseInt(number) != 0) {
    number = prompt("Input another number or end with (0):");
    numbers.push(parseInt(number));
}

numbers.sort((a, b) => a - b);
numbers.shift();
console.log(numbers);

