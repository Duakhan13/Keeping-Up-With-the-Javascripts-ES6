/** @format */

// Switch Statements
/*
swtich(expression){
    case value1:
        statement to be executed when result of expression matches value1
        break;
        case value2;
        ...
        break;
        case value3:
            ...
            break;
            default:
            break;
}
*/

//const myFruit = "Apple";
// if (myFruit === "Apple") {
//   console.log("Awesome, I love apples.");
// } else if (myFruit === "orange") {
//   console.log("Oranges are cool :D");
// } else if (myFruit === "Pear") {
//   console.log("Perfect! I love pears <3");
// } else {
//   console.log("That sounds pretty OK.");
// }

//make sure to always have a default
function fruitLogger(fruit) {
  switch (fruit) {
    case "Apple":
    case "Banana":
      console.log("Awesome, I love apples.");
      break;
    case "Pear":
      console.log("Perfect! I love pears <3");
      break;
    case "Orange":
      console.log("Oranges are cool :D");
      break;
    default:
      console.log("I didn't understand that but sure.");
      break;
  }
  console.log("Broke out of switch statement");
}
fruitLogger(myFruit);

function numChecker(num) {
  let value;
  switch (num) {
    case 0:
    case 1:
    case 2:
      value = "Low Range";
      break;
    case 3:
    case 4:
    case 5:
      value = "Mid Range";
      break;
    case 6:
    case 7:
    case 8:
      value = "High Range";
      break;
    default:
      value = "Input number should be between 0-8";
      console.log(value);
      return;
  }
  setVolume("Low Range");
}
function setVolume(n) {
  console.log("Volume set at " + n);
}
numChecker(1);

//ES6 way
const donutPicker = (flav) => {
  switch (flav) {
    case "s":
      return "Sprinkles";
    case "g":
      return "Glazed";
    case "f":
      return "Chocolate filled";

    default:
      return null;
  }
};
const donuts = (selection) => {
  const selectedDonut = donutPicker(selection);
  if (!selectedDonut) {
    console.log("Incorrect Selection");
  } else {
    console.log("You have picked " + selectedDonut);
  }
};
donuts("s");
donuts("f");
donuts(123);
