const readlineSync = require("readline-sync");

function askSerie(){
    let nameOfSerie = readlineSync.question("What's your favorite serie ? ");
    let year = readlineSync.questionInt("Years of production ? ");
    let n = readlineSync.questionInt("How many cast members ? ");
    let arrInfo = [];

    for (let i = 0; i < n; i++) {
        arrInfo.push(readlineSync.question('Enter ' + (i + 1) + ' cast menbers '));
    }

    let myObject = {
        name : nameOfSerie,
        year : year,
        casts : arrInfo
    };
    return myObject
    /*
    do{
        cast = readlineSync.question('Enter one or multiple cast menbers, enter "q " for exit');
        if(cast !== "q"){
            arrInfo.push(cast)
        }
    }
    while(cast !== "q"){
        
        return myObject;
    }*/
}

 function randomizeCast(arr){
    let currentIndex = arr.length,  randomIndex;

    while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
  }
  return arr
}

let tvSerie = askSerie()
randomizeCast(tvSerie.casts)
console.log("Cast members for the new series = " + tvSerie.casts)