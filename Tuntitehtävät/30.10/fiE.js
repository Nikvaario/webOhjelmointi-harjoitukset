"use strict";

let names = [];

for (let i = 0; i < 5; i++) {
    let name = prompt(`Please input name (${i + 1}/5):`);
    names.push(name)
}

let allNamesText = document.querySelector("#allNames");
allNamesText.textContent = names;

let lastNameText = document.querySelector("#lastName");
lastNameText.textContent = names[names.lenght - 1];

names.sort();
let firstNameSortedText = document.querySelector("#firstNameSorted");
firstNameSortedText.textContent = names[0];

names.shift();
let allNamesSortedText = document.querySelector("#allNamesSorted")
allNamesSortedText.textContent = names
