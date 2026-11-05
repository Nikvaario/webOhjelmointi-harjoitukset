"use strict";

let dogs = [];

for(let i = 0; i < 6; i++) {
    dogs.push(prompt(`Insert dog ${(i+1)}'s name:`));
}

dogs.sort();
dogs.reverse();

const list = document.querySelector("#list");

for (const dog of dogs) {
    let li = document.createElement("li");
    li.innerText = dog;
    list.appendChild(li);
}