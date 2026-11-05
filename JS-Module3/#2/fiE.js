"use strict";

const participantAmount = parseInt(prompt("How many are participating:"));
let participants = [];

for (let i = 0; i < participantAmount; i++) {
    participants.push(prompt(`Write participant ${i+1}'s name:`));
}

participants.sort();

const list = document.querySelector("#list");

for (let i = 0; i < participantAmount; i++) {
    let li = document.createElement("li");
    li.innerText = participants[i];
    list.appendChild(li);
}