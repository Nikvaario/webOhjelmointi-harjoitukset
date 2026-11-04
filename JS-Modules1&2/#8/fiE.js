"use strict";

const startYear = parseInt(prompt("Input start year:"));
const endYear = parseInt(prompt("Input end year:"));
const list = document.querySelector("#list");

for(let i = startYear; i < endYear + 1; i++){
    let addYear = false;

    if (i % 100 == 0) {
        if (i % 400 == 0) {
            addYear = true;
        }
    } else if (i % 4 == 0) {
        addYear = true;
    }

    if (addYear == true) {
        const li = document.createElement("li");
        li.innerText = i;
        list.appendChild(li);
    }
}