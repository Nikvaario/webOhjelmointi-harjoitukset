"use strict";

function throwDice() {
    return Math.floor(Math.random() * 6) + 1;
}

let dice = throwDice();
let throws = 1;
const list = document.querySelector("#list");

while (dice != 6) {
    let li = document.createElement("li");
    li.innerText = parseInt(dice);
    list.appendChild(li);

    dice = throwDice();
    throws++;
}

const p = document.querySelector("#p").innerHTML = 
    `After ${throws} throw(s), number 6 was threwn. Following is a list of all other throws:`;
