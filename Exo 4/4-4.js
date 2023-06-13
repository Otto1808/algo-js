function multiRand(n) {
    const numbers = [];
    for (let i = 0; i < n; i++) {
      numbers.push(Math.floor(Math.random() * 100));
    }
    return numbers;
  }

function average(array){
        let sum = 0;
        for (let i = 0; i < array.length; i++) { 
            sum += array[i];
        }
        return sum / array.length
    } 

function min(array) {
    let minimum = array[0]; 
    for (let i = 1; i < array.length; i++) {
      if (array[i] < minimum) {
        minimum = array[i];
      }
    }
    return minimum;
  }


  function max(array) {
    let maximum = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > maximum) {
        maximum = array[i];
      }
    }
    return maximum;
  }

const readlineSync = require('readline-sync');
let n = readlineSync.questionInt("Enter a number ");
let randNumbers = multiRand(n);

console.log("Number generate :", randNumbers);
console.log("Average :", average(randNumbers));
console.log("Minimum :", min(randNumbers));
console.log("Maximum :", max(randNumbers));