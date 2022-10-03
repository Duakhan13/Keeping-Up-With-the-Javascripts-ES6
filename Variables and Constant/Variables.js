/** @format */
//different types of variables
var myName = "bob"; //this is a globale varaible we can access it from anywhere
var myFavNum = 13;
var myArray = [1, 2, 3, 4, 5, "Bob", "jane"];
var myObject = {
  name: "chris",
  age: 21,
};
console.log(typeof myName);
console.log(myFavNum);
console.log(myArray);
console.log(typeof myObject);

function sayHi() {
  myName = "sally";
  console.log("Hi" + " " + myName);
}
sayHi();
sayHi();
sayHi();
var count = 1;
function increase() {
  count += 1;
  console.log(count);
}
increase();
increase();
var amChris = true;
console.log(amChris);
var amNull = null;
console.log(amNull);

function sayName() {
  var myName = "chris"; //this variable is locally scoped varaible confined to this function
  console.log(myName);
}
sayName();
console.log(myName); //it is not a good practice to redeclare a variable with same name
//you cannot declare a variable starting with a number or useing a reserved word
