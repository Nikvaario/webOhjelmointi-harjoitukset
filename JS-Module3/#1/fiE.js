"use strict";

let numbers = [];
let numbersInversed = [];

for (let i = 0; i < 5; i++) {
    const number = prompt(`Input a number (${i+1}/5):`);
    numbers.push(number);
}

for (let i = 1; i < 6; i++) {
    numbersInversed.push(numbers[(5-i)]);
}

console.log(`Input numbers ${numbers} in reversed order: ${numbersInversed}`);