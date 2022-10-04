/** @format */

//A function is a javascript producer - a set of statements
// that performs a tast or calculates a IDBCursorWithValue.

//simple function with parameters
function sayHi(FirstName, lastName, age) {
  console.log("Hi " + FirstName + " " + lastName + ", you are " + age);
}
const Damon = "Damon";
const Salvatore = "Salvatore";
sayHi("Billy", "jean", 20);
sayHi(Damon, Salvatore, 29);

//a function that returns a value
function numberDoubler(num) {
  const doubledValue = num * 2;
  return doubledValue;
}
const numTwoDoubled = numberDoubler(2);
const numFiveDoubled = numberDoubler(5);
console.log(numTwoDoubled);

function numberAdder(num1, num2) {
  return num1 + num2;
}
console.log(numberAdder(numTwoDoubled, numFiveDoubled));

// hoisting means when the code is compiled all the functions are placed on the top by default by the compiler,
// so no matter where we write the code of our function we can access it anywhere due to hoisting

const myName = "chris";
function anotherSayHi(myName) {
  if (!myName) {
    var myName = "Bob";
  }
  console.log("Hi " + myName);
}
anotherSayHi(); //due to hoisting the name will be undefined and if statement will make it bob

//function expression
var squaredNumber = function (num) {
  return num * num;
};
var addNumber = function (squarer, num2) {
  const squared = squarer(4);
  return squared + num2;
};
console.log(addNumber(squaredNumber, 10));

// here we can see that a let can be declared to be used as a parameter
// after calling the function the originakl value of let will not be changed
let myNumber = 100;
function addTwenty(num) {
  return num + 20;
}
console.log(addTwenty(myNumber));

//here we can modify the object by using a function
const myInfo = { name: "chris", age: 30 };
function changeAgeto100(myObj) {
  myObj.age = 100;
}
console.log(myInfo);
changeAgeto100(myInfo);
console.log(myInfo);

//same thing can happen to an array
const myArray = [1, 2, 3];
function addToArray(myArr) {
  myArr.push(4);
}
console.log(myArray);
addToArray(myArray);
console.log(myArray);
