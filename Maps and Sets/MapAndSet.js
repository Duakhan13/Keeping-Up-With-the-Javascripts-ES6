/** @format */

//Map object
/**
 * - Used for simple key/value pairs
 * - ANy value can be used for either a key or value(i.e objects,strings,function)
 * - Reasons for using map over objects:
 * - Object prototype has default keys that might conflict with own keys
 * - Keys of map can be anything, where as with bjects, have to be string or symbol
 * - Can easily get the size of map
 */
const myMap = new Map();
const firstKy = "key1";
const firstVal = "First value :D";
const secondKey = {};
const thirdKey = function () {};
myMap.set(firstKy, firstVal);
myMap.set(secondKey, "value");
myMap.set(thirdKey, "value of function");
myMap.set("anotherKey", "anotherValue");
console.log(myMap.get(firstKy));
console.log(myMap.get("anotherKey"));
myMap.clear(); //you can clear all the stored values
console.log(myMap.has(firstKy));
myMap.forEach((val) => console.log(val));

//iterating
//keys(), values(), entries()
// we can do a for each loop and a for of loop
for (const [key, value] of myMap.entries()) {
  console.log(`${key} => ${value}`);
}
for (const val of myMap.values()) {
  console.log(val);
}
for (const keys of myMap.keys()) {
  console.log(keys);
}

const myMapData = [
  ["keyA", "ValueA"],
  ["KeyB", "valueB"],
];
const anotherMap = new Map(myMapData);
console.log(anotherMap);

// Set object
/**
 * - Lets you store unique values of any type
 * - Each element is unique
 */
const mySet = new Set();
const obj1 = {
  1: "hey",
  2: "hello",
};
const obj2 = {
  1: "x",
  2: "y",
  3: "z",
};
mySet.add(obj1);
mySet.add(obj2);
mySet.add("hello there :D");
console.log(mySet.size);
console.log(mySet.has(obj1));
//just like an array we can call for each on sets

mySet.forEach((val) => console.log(val));
//we can also iterate using keys etc
for (const val of mySet.values()) {
  console.log(val);
}

//convert set to array
const arrFromSet = Array.from(mySet);
console.log(arrFromSet);

const myArr12 = [1, 2, 3, 4, 5];
const anotherSet = new Set(myArr12);
console.log(anotherSet);
