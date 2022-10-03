/** @format */

//Arrays
//Collection of data
//this is the prefered way of definig an array
// var myArray = [1, 2, 3, "asdas", "asidhasd", true];
// console.log(myArray.length); //length is always one number higher than the index numbers
// console.log(myArray[2]);
// //this is another way of defining an array
// var myNamesArray = new Array();
// myNamesArray[0] = "chris";
// myNamesArray[1] = "Newt";
// console.log(myNamesArray[50]);

//how to push items into an array or pop an item from an array
var namesArray = ["chris", "jesscia", "Newt", "jane"];
namesArray.push("james", "sally");
console.log(namesArray);
namesArray.pop();
console.log(namesArray);

namesArray.push(["edward", "drake"]);
console.log(namesArray[4]);

var anotherArray = ["chris", "zack", "jessica", "john", "jane"];
console.log(anotherArray[5]); //this will give you the value of the nested array's 0th index
var sortedArray = anotherArray.sort();
sortedArray.reverse(); //this method reversed the sorted method
console.log(sortedArray);
// //concat method
var myOtherArray = ["jake", "Amy", "Timmy"];
var concattedArray = anotherArray.concat(myOtherArray);
console.log(concattedArray);
// //slice method
var slicedArray = concattedArray.slice(4, 7);
console.log(slicedArray);

var anotherSlicedArray = namesArray.slice(namesArray.length - 1);
console.log(namesArray);
console.log(anotherSlicedArray);
