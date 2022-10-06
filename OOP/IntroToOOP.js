/**@format
 * object oriented programming
 * OOP: basic idea is that you use objects to represent real world
 things. Objects have own properties and functions(methods).
 * Objects can contain data and other code to representinfo about what you'r
 trying to model
 * Data / methods iside the object is encapsulated
 *In clasic OOP, class is defined, then, when an instance of that class is
 created, all the properties and methods are coppied pver to the instance
 * JavaScript is dynamic and does not provide traditional
 class implementation per se
 *Javascript inheritacne is prototype based
 *Each object has a pricate property called prototype
 *The rpototype can have a prototype of its own
 *Nearlly all objects in javascript are instances of object
 which sits on top of the prototype chain.
 *The prototype property's value is an object
 *Think of it as a bucket to store properties and methods
 *Prototyoe as a template and can have prototypes of its own
 * The prototype property is where inhertied members are defined
 */

//pretend tgis is a class below
// function ship() {
//   this.floats = true;
//   this.material = "Steel";
//   this.whatAmI = function () {
//     console.log("I am made of: " + this.material);
//   };
// }
// const myShip = new ship();
// myShip.whatAmI();

const myObj = {
  a: 1,
  b: 2,
};
console.log(myObj.valueOf());
//does myObj have a method called valueOf()?
//No
//Does Object prototype have a method called valueOf()?
//Yes
const myString = "Hello";
console.log(myString.charAt(0));
//does myString have a method called charAt()?
//No
//Does String prototype have a method called charAt()?
//Yes
console.log(myString.valueOf());
//does myString have a method called valueOf()?
//No
//Does String prototype have a method called valueOf()?
//No
//Does Object prototype itself have a method called valueOf()?
//Yes
//myString > String > Object

const name1 = {
  Name: "Billy",
  age: 16,
  sayName: function () {
    console.log(`My name is ${this.Name}`);
  },
};
//here we inherited the values of name1 to name2
const name2 = Object.creatste(name1);
name2.sayName();
console.log(name2.hasOwnProperty("age"));
