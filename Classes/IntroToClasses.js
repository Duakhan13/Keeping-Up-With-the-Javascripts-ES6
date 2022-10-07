/** @format */

//Object-oriented JavaScript part 2: classes
// Classes in ES6 are just syntactical suger over javascripts
//existing prototype-based inheritance
//Simple, clean syntax to creat objects and take care of inheritance

// pre ES6 way
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Person.prototype.greetings = function () {
//   console.log(`Greetings from ${this.name}`);
// };
// function Employee(name, age, role) {
//   Person.call(this, name, age);
//   this.role = role;
// }

// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor = Employee;
// const bill = new Employee("Bill", 25, "Developer");
// bill.greetings();

//Post ES6 way, introduction of  classes which makes inhertiance easy and concise
//Note to keep in mind
/**
 * Wheather you use class daclaration or class expression
 * classes are not hoisted
 */

//first way class declaration
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greetings() {
    console.log("Classes are cool!");
  }
}
const bob = new Person("bob", 30);
bob.greetings(); //no need to put the method on a prototype object classes puts it on them itself

//however if we want to change the method on prototype then we can do it in followng way
Person.prototype.greetings = function () {
  console.log(`I changed the method on prototye`);
};
bob.greetings();

//second way class expression

// const Person = class {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// };
// const billy = new Person("Billy", 29);
// console.log(billy.age);
