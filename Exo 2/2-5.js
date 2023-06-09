const readlineSync = require("readline-sync");

let num = 1;

while(num < 42 || num > 42) {
    num = readlineSync.questionInt("What's your favorite number ?");
    console.log("Are you sure?");
}