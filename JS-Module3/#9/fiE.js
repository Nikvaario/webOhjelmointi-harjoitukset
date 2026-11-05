"use strict";

function even(array) {
    let evenArray = [];
    for (const number of array) {
        if (number % 2 == 0) {
            evenArray.push(number);
        }
    }
    return evenArray;   
}

const array = [2, 6, 3, 1, 8, 9];
const evenArray = even(array);

console.log(`Original array: ${array} & even array: ${evenArray}`);