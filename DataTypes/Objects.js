/** @format */

//objects
// collections of name-value pairs
//Three different ways of making an object
// var myName = { 1: "chris" };
// console.log(myName);
// var myObject = new Object();
// myObject["1"] = "chris";
// myObject["2"] = "chris";
// console.log(myObject);

// var myOtherObject = {
//   1: "chris",
//   2: "Sally",
//   3: "Edward",
// };
// myOtherObject["4"] = "Ashley";
// console.log(myOtherObject);

// var myAnotherObject = {
//   firstName: "Chris",
//   LastName: "Smith",
//   age: 50,
//   numbers: {
//     mobile: "555-55-1234",
//     home: "55-55-5555",
//   },
//   address: "123 Fake st.",
// };
// console.log(myAnotherObject.firstName); //you can target the value of key
// console.log(myAnotherObject.numbers); //targets the objet specidied within an object
// console.log(myAnotherObject);

// var userMobileNumber = myAnotherObject.numbers.mobile; //you can save the key into a variable this way
// console.log(userMobileNumber);

// var donut= {
//   type: "coconut",
//   glazed: true,
//   sweetness: 8,
//   hasChocolate: false,
//   sayType: function () {
//     console.log("Type: " + this.type);
//   },
//   showSweetness: function () {
//     console.log("Sweetness: " + this.sweetness + "/10");
//   },
// };
// donut.sayType(); //you can run a function that is inside am object like this
// donut.showSweetness();

//constructor pattern for creating objects

function DonutConstructor(type, glazed, sweetness, hasChocolate) {
  this.type = type;
  this.glazed = glazed;
  this.sweetness = sweetness;
  this.hasChocolate = hasChocolate;
  this.sayType = function () {
    console.log("Type: " + this.type);
  };
  this.showSweetness = function () {
    console.log("Sweetness: " + this.sweetness + "/10");
  };
}
var coconutDonut = new DonutConstructor("coconut", false, 8, true);
var vanillaDonut = new DonutConstructor("vanilla", true, 6, true);
console.log(coconutDonut.type);
vanillaDonut.sayType();
