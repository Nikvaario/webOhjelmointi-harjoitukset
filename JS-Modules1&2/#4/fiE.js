"use strict";

function getRandomInt() {
  return Math.floor(Math.random() * 4);
}

const nickname = prompt("What is your name:")
const num = getRandomInt();
let assigned;

console.log(parseInt(num))
switch (num) {
    case 0:
        assigned = "Gryffindor"
        break;
    case 1:
        assigned = "Slytherin"
        break;
    case 2:
        assigned = "Hufflepuff"
        break;
    case 3:
        assigned = "Ravenclaw"
        break;
}

document.querySelector("#output").innerHTML =
    nickname + ", you're a " + assigned;