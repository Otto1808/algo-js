const readlineSync = require("readline-sync");

let n = readlineSync.questionInt('Enter a number ');

let x  = 0;

for (let i = 0;  i < n ; i ++) {
    let num = readlineSync.questionInt
    ('enter a number  ');
    x += num;
} console.log(x);
