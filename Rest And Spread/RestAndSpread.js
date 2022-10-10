/**
 * More cool ES6 features
 * Spread synctax
 * - can be used in places wher (e.g.) functions
  expect multiple arguments, multiple elements, or multiple variables
 * - The spread operator helps us expand an iterable such as an array where multiple arguments are needed,
  it also helps to expand the object expressions.
  In cases where we require all the elements of an iterable or object to help us achieve a task,
   we use a spread operator.
 * @format
 */

function spread(...multipleArgs) {
  console.log(multipleArgs);
}
spread(1, 20, false, "hi", "hey");

const myArray = [1, 2, 3, 4];
const mySecondArray = [5, 6, 7, 8, 9];
const myThirdArray = [...myArray, ...mySecondArray];
myArray.push(...mySecondArray);
console.log(myArray);

//Alternative to Function.prototype.apply
function sayHello(x, y, z) {
  console.log(`Hello ${x}, ${y}, ${z}`);
}
const helloArray = ["Bob", "Jane", "Peter", "Zay"];
//old way of giving arguments from an array
sayHello.apply(null, helloArray);
// ES6 way (spread syntax)
sayHello(...helloArray);

//to concatenate a bunch of arrays together
//pre ES6
const myArr1 = ["Jelly Beans"];
const myArr2 = ["Donuts", "Chocolate"];
const myArr3 = ["Pie", "Lemonade"];
const newMyArr = myArr1.concat(myArr2, myArr3); //concat creates a new array
console.log(newMyArr);
//ES6 way
const anotherNewArr = [...myArr1, ...myArr2, ...myArr3];
console.log(anotherNewArr);

//To insert parts of one array in the middle of another array
//Pre ES6 Way
const listofCarPart = ["gasket", "tires", "radiator", "muffler"];
const listOfPartsToInsert = ["wiper", "headlights"];

function listInserter(arr1, arr2, index) {
  const firstPartOfArray = arr1.slice(0, index);
  const secondPartOfArray = arr1.slice(index);
  console.log(firstPartOfArray);
  console.log(secondPartOfArray);
  const completeCarParts = firstPartOfArray.concat(arr2, secondPartOfArray);
  console.log(completeCarParts);
}
listInserter(listofCarPart, listOfPartsToInsert, 2);
// //Post ES6 way (spread);

function listInserter(arr1, arr2, index) {
  const firstPartOfArray = arr1.slice(0, index);
  const secondPartOfArray = arr1.slice(index);
  console.log(firstPartOfArray);
  console.log(secondPartOfArray);
  const completeCarParts = [...firstPartOfArray, ...arr2, ...secondPartOfArray];
  console.log(completeCarParts);
}
listInserter(listofCarPart, listOfPartsToInsert, 2);

//difference between slice and splice
//splice returnS the removed items
//here it will remove tires, radiator and muffler and return it as a new array
//it basically distroys the original array
listofCarPart.splice(0, 1);
console.log(listofCarPart);

//rest operator
// rest operator takes all the arguments and put them together into one array
/**
 *  The rest parameter is converse to the spread operator.
  while spread operator expands elements of an iterable, rest operator compresses them. 
  It collects several elements.
 In functions when we require to pass arguments but were not sure how many we have to pass, 
  the rest parameter makes it easier. 
 */

function hasManyArgs(x, y, ...restOfallArgs) {
  for (const prop of restOfallArgs) {
    console.log(prop + 10);
  }
}
hasManyArgs("h", "hello", 10, 20, 30, 40);

//Method deinitions
//Pre ES6  in object literals, methods are defined as function expressions

const myObj = {
  id: 10,
  sayH: function () {
    console.log("hi");
  },
};

//ES6 has method definitions for creating methods
const myES6Object = {
  id: 11,
  sayHi() {
    console.log("ES6 is cool");
  },
  sayBye() {
    console.log("Bye now!!");
  },
};
const anotherObj = {
  greet(arg1) {
    console.log(`hey ${arg1}!`);
  },
  anotherMethod(...args) {
    this.greet(args[0]);
    console.log(`I have ${args.length} arguments`);
  },
};
anotherObj.anotherMethod("tim", 1, false, [1, 2, 3], 61);
