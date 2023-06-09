const readlineSync = require("readline-sync");

let name = readlineSync.question("What's your name?");
let firstName = readlineSync.question("What's your first name?");
let city = readlineSync.question("Where do you live?");

console.log("Hello " + name + firstName + " and you live in " + city);