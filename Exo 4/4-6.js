function factorielle(a) {
    if (a === 0) {
      return 1;
    } else {
      return a * factorielle(a - 1);
    }
  }
  
var resultat = factorielle(5);
console.log(resultat);