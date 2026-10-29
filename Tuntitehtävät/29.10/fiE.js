"use strict";

console.log("Hello world");

let teksti = document.querySelector("#introduction")
teksti.textContent = "Welcome to grade displayer";

document.getElementById("calc").addEventListener("click", () => {
    let pyInput = document.querySelector("#py") 
    let projInput = document.querySelector("#proj")
    let maInput = document.querySelector("#ma")

    let pyInt = parseInt(pyInput.value)
    let projInt = parseInt(projInput.value)
    let maInt = parseInt(maInput.value)

    const values = pyInt + projInt + maInt
    const output = values / 3
    
    let text = document.querySelector("#result")
    text.textContent = `Calculated avarage: ${output}`
})