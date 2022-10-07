/** @format */

//for in loops
/*
loop through an objects properties in arbitrary order
it is used for looping over object properties
*/
const users = {
  a: "sally",
  b: "billy",
  f: "james",
};
for (let prop in users) {
  let newUser = users[prop];
  newUser = "Redacted";
  console.log(newUser);
}
const drinks1 = ["coffee", "sprite", "dew", "coke", "pepsi"];
for (let d in drinks1) {
  console.log(drinks1[d]);
}

//for each loop iterates over each element
//for each is for arrays
//downfall of for each is that we cant break out of it or do a continue
const drinks = ["coffee", "sprite", "dew", "coke", "pepsi"];
drinks.forEach((d) => {
  console.log(d);
});

//for of loop
/**
 * New loop in ES6 used to loop over iterable objects like
 * arrays, strings, maps, sets, etc but not objects
 */
//this will separate the strings characters
const myString = "Hello";
for (const c of myString) {
  console.log(c);
}
//this iwll simoly incease the number by ten
const originalArray = [10, 20, 30, 40];
function numIncreaser(arr, numToBeIncBy) {
  for (let num of arr) {
    num += numToBeIncBy;
    console.log(num);
  }
}
numIncreaser(originalArray, 10);

//set will give us the unique names meaning remove the repeatition
const originalArr = ["chris", "james", "billy", "chris", "jane", "james"];
const uniqueNameSet = new Set(originalArr);
for (const n of uniqueNameSet) {
  console.log(n);
}
