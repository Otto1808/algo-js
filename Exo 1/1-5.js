const readlineSync = require("readline-sync");

let firstAnswer = readlineSync.question("Give me a number with decimal");
let secondAnswer = readlineSync.question("Give me a second number with decimal");
let total = Math.round(firstAnswer * secondAnswer);

console.log("Total is " + total);