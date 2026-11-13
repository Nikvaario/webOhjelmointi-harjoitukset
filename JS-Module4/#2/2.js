const ul = document.querySelector("#target");

let li_1 = document.createElement("li");
let li_2 = document.createElement("li");
let li_3 = document.createElement("li");

li_1.innerText = "First item";
li_2.innerText = "Second item";
li_3.innerText = "Third item";

ul.appendChild(li_1);
ul.appendChild(li_2);
ul.appendChild(li_3);