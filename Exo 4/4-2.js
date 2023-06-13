let randNumber = rand10();

function rand10(){
    return Math.floor(Math.random() * 10) + 1;
}
console.log(randNumber);