"use strict";

function throwDice(value) {
    return Math.floor(Math.random() * value) + 1;
}

const highestNum = parseInt(prompt("What is the highest number in your dice:"))

let dice = throwDice(highestNum);
let throws = 1;
const list = document.querySelector("#list");

while (dice != 6) {
    let li = document.createElement("li");
    li.innerText = parseInt(dice);
    list.appendChild(li);

    dice = throwDice(highestNum);
    throws++;
}

const p = document.querySelector("#p").innerHTML = 
    `After ${throws} throw(s), number ${highestNum} was thrown. Following is a list of all other throws:`;
