const readlineSync = require("readline-sync");

function askSerie(){
    let nameOfSerie = readlineSync.question("What's your favorite serie ?");
    let year = readlineSync.questionInt("Years of production ?");
    let arrInfo = [];

    do{
        cast = readlineSync.question('Enter one or multiple cast menbers, enter "q " for exit');
        if(cast !== "q"){
            arrInfo.push(cast)
        }
    }
    while(cast !== "q"){
        let myObject = {
            name : nameOfSerie,
            year : year,
            arrInfo : arrInfo
        };
        return myObject;
    }
}

let answer = askSerie();

console.log(answer);
