/** @format */

//Booleans
// var shouldBeTrue = true;
// var shouldBeNull = null;
// console.log(shouldBeTrue === false); //this will give false as answer since the vlue assigned is true
// console.log(shouldBeNull);
// if (shouldBeNull === true) {
//   //simple if else condition to check if variable is null or notS
//   console.log("this is true");
// } else {
//   console.log("this is not true");
// }

var hasContent = "asjnasdsd";
var myArray = ["1", "2", "3"];
var myArrayy;

var doesNotHaveContent = "";
var isZero = 0;
var nonAssignedvariable;
var isNotANumber = NaN;
console.log(Boolean(hasContent)); //evlauates to true
console.log(Boolean(doesNotHaveContent)); //evaluates to false
console.log(Boolean(isZero)); //evaluates to false
console.log(typeof nonAssignedvariable); //evaluates to undefined
console.log(Boolean(nonAssignedvariable)); //evaluates to false
console.log(Boolean(isNotANumber)); //evaluates to false
console.log(Boolean(myArray)); //evaluates to true
console.log(Boolean(myArrayy)); //evaluates to false
if (myArray) {
  //will evaluates to true
  console.log("Has truthy values");
} else {
  console.log("has falsey values");
}

console.log(null === undefined); //since both are not the same thing this will be false
