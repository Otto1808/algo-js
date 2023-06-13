let pointA = [1, 1];
let pointB = [2, 2];
let pointC = [1, 1];
let pointD = [3, 1];
let pointE = [4, 1];
let pointF = [1, 1];
let pointG = [-2, 2];
let pointH = [2, -2];

function calcDistance(pointA, pointB) {
    var distance = Math.sqrt(Math.pow(pointA[0] - pointB[0],2) + Math.pow(pointA[1] - pointB[1],2));
    return distance;
  }

  console.log(calcDistance(pointA, pointB));
  console.log(calcDistance(pointC, pointD));
  console.log(calcDistance(pointE, pointF));
  console.log(calcDistance(pointG, pointH));
