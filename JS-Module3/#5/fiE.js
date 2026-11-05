"use strict";

let numbers = [];

let number = parseInt(prompt("Inser a number:"));
numbers.push(number);

let result = false
while (result != true) {
    number = parseInt(prompt("Insert another number:"));
    for (const num of numbers) {
        if (num == number) {
            result = true;
        }
    }
    if (result == false) {
    numbers.push(number);
    }
}

numbers.sort((a, b) => a - b);
console.log(`Already existing number input, ending program and printing all input numbers in order: ${numbers}`);
