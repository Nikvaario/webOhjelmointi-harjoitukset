"use strict";

function getRandomInt() {
  return Math.floor(Math.random() * 6);
}

const throws = parseInt(prompt("How many times will the dice be thrown?"));
let sum = 0;
let rollNums = [];

for (let i = 0; i < throws; i++){
    const dice = getRandomInt() + 1;
    sum += dice;
    rollNums.push(dice);
}

document.querySelector("#output").innerHTML =
    "Sum of " + throws + " dices with values " + rollNums + " is: " + sum;