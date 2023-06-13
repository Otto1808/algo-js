const readlineSync = require("readline-sync");

let length = readlineSync.question("Give me the length of your rectangle?");
let width = readlineSync.question("Give me the width of your rectangle?");
let surface = calcSurface(length, width);

function calcSurface(length, width){
    return length * width;
}

console.log("the surface of your rectangle is " + surface + "Cm2");