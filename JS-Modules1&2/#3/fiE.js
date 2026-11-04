"use strict";

const value1 = prompt("Please, input the first value:");
const value2 = prompt("Please, input the second value:");
const value3 = prompt("Please, input the third value:");

const value1Int = parseInt(value1);
const value2Int = parseInt(value2);
const value3Int = parseInt(value3);

const sum = value1Int + value2Int + value3Int;
const product = value1Int * value2Int * value3Int;
const avg = (value1Int + value2Int + value3Int) / 3;

document.querySelector("#output").innerHTML 
    = "Prompted numbers sum, product and avarege in order: " + sum + ", " + product + " & " + avg;

