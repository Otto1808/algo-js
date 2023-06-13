const readlineSync = require('readline-sync');
let n = readlineSync.questionInt("Give me number of random number to generate : ");
let randNumbers = multiRand(n);

function rand10(){
    return Math.floor(Math.random() * 10) + 1;
}

function multiRand(n) {
    let arrays = [];
    for (let i = 0; i < n; i++) {
      arrays[i] = rand10();
    }
    return arrays;
}

console.log(randNumbers);
