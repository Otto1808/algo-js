const readlineSync = require("readline-sync");

let minAge = readlineSync.questionInt("Can u give me a min age plz ?");
let maxAge = readlineSync.questionInt("Can u give me a max age plz ?");
let currentAge = readlineSync.questionInt("Can u give me your current age plz ?");

if (minAge > maxAge){
    console.log("You didn't understand the instructions ");
    return;
}
else if (currentAge > minAge && currentAge < maxAge){
    console.log("It's ok");
}

