'use strict';
const names = ['John', 'Paul', 'Jones'];
const ul = document.querySelector("#target");
let html = ``;

for (let name of names) {
    html += `<li>${name}</li>`;
}

ul.innerHTML = html;
