"use strict";

function concat(array) {
    let output = "";
    for (const item of array){
        output += item;
    }
    return output;
}

const array = ["Johnny", "DeeDee", "Joey", "Marky"];
document.querySelector("#output").innerHTML = concat(array);