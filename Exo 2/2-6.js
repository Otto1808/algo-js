const readlineSync = require("readline-sync");

let num = readlineSync.questionInt("Enter a number between 0 and 7");

switch (Number (num)) {
    case 0:
      day = "Sunday";
      console.log("Sunday");
      break;
    case 1:
      day = "Monday";
      console.log("Monday");
      break;
    case 2:
       day = "Tuesday";
       console.log("Tuesday");
      break;
    case 3:
      day = "Wednesday";
      console.log("Wednesday");
      break;
    case 4:
      day = "Thursday";
      console.log("Thursday");
      break;
    case 5:
      day = "Friday";
      console.log("Friday");
      break;
    case 6:
      day = "Saturday";
      console.log("Saturday");
      break
  }