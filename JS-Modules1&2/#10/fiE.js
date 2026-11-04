"use strict";

function getRandomInt() {
  return Math.floor(Math.random() * 6) + 1;
}

const rolls = parseInt(prompt("How many dice will you roll?"));
const sum = parseInt(prompt("What sum are you looking for?"));
let success = 0;
let prob = 0.0;

for (let i = 0; i < 10000; i++){
    let total = 0;
    for (let j = 0; j < rolls; j++){
        total += getRandomInt();
    }
    if (total == sum) {
        success++;
    }
}

prob = success / 10000;
document.querySelector("#output").innerHTML =
    rolls + " dice, sum " + sum + ", probability is about " + prob.toFixed(2) + " % in 10000 tries";
