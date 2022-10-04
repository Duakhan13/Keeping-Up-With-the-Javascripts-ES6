/** @format */

// difference between let and const

//this is an example of how var is function scoped
function sayHi() {
  var shouldSayHi = true;
  var reallySayHi = true;
  if (shouldSayHi === true) {
    var myName = "Chris";
    if (reallySayHi === true) {
      var myLastName = "Smith";
    }
  }
  myLastName = "jones";
  console.log("Hi " + myName + " " + myLastName);
}
console.log(myName); // this will give an error that myName is not defined since it is defined in the function
sayHi();

//ES6 code that introduces let

function sayHi() {
  let shouldSayHi = false;
  let myName;
  if (shouldSayHi === true) {
    myName = "Chris"; //let is scoped to the block
    console.log("Hi " + myName);
  } else {
    myName = "Bob";
    console.log("Hi " + myName);
  }
  console.log(myName);
}

sayHi();

//ES6 code that introduces const

//const is very similar to let it's block scoped but the difference is that it cannot be reassigned.

function sayHi() {
  let shouldSayHi = true;
  const myName = "Chris";
  if (shouldSayHi === true) {
    myName = "Smith"; //this will give an error fr reassigning value to a constant
    console.log("Hi " + myName);
  }
}
sayHi();

//how to manipulate the data stored in a const array
const myArray = [1, 2, 3];
myArray.push(4); //you can mutate the data of a const but you cannot reassign it
console.log(myArray);

//similalry for objects
const myObject = {
  name: "Chris",
};
console.log(myObject);
myObject.name = "Bob"; //in this wy we can maipulate the data in a const object
console.log(myObject);

//const in action in the context of scope
function sayHi() {
  const myName = "jungkook";
  if (true) {
    const myName = "Jimin";
    console.log(myName); //due to context of block this will print Jimin
  }
  console.log(myName); //and this will print jungkook
}
sayHi();
