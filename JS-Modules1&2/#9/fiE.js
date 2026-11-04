"use strict";

const num = parseInt(prompt("Input a number: "));
const list = document.querySelector("#list");
let result = true;
let output;

if (num <= 1){
    output = "Your number " + num + " is not a prime number. (has to be higher than 1)";
} else {
    for(let i = 2; i < num; i++){
        if (num % i == 0){
            result = false;
            const li = document.createElement("li");
            li.innerText = i;
            list.appendChild(li);
        }
    }
}

if (result == true) {
    output = "Your number " + num + " is a prime number!"
} else {
    output = "Your number " + num + " is not a prime number. (can be divided by a value(s) between 1 and itself)"
}

document.querySelector("#output").innerHTML = output;