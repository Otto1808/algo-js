/*
1.6/
const readlineSync = require("readline-sync");

let firstAnswer = readlineSync.question("Give me a number with decimal");
let secondAnswer = readlineSync.question("Give me a second number with decimal");
let total = Math.round(firstAnswer / secondAnswer);

console.log("Total is " + total);

1.5/
const readlineSync = require("readline-sync");

let firstAnswer = readlineSync.question("Give me a number with decimal");
let secondAnswer = readlineSync.question("Give me a second number with decimal");
let total = Math.round(firstAnswer * secondAnswer);

console.log("Total is " + total);
 
1.4/
const readlineSync = require("readline-sync");

let name = readlineSync.question("What's your name?");
let firstName = readlineSync.question("What's your first name?");
let city = readlineSync.question("Where do you live?");

console.log("Hello " + name + firstName + " and you live in " + city);

1.3/
console.log("Your name is " + name + firstName + " and you live in " + city);

1.2/
console.log("Hello " + firstName); 
*/