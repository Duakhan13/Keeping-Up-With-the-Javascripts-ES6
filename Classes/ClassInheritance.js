/** @format */

//class inheritance

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greetings() {
//     return "classes are the coolest";
//   }
// }
//const bob = new Person("bob", 30);
//bob.greetings(); //no need to put the method on a prototype object classes puts it on them itself

//however if we want to change the method on prototype then we can do it in followng way

//bob.greetings();

//Super keyword calls function on an object's parent class
// class Employee extends Person {
//   constructor(name, age, role) {
//     super(name, age);
//     this.role = role;
//   }

//   testGreeting() {
//     const parentString = super.greetings();
//     console.log(`${this.name} thinks ${parentString}`);
//   }
// }
// const barb = new Employee("Barb", 27, "Developer");
// //console.log(barb);
// barb.testGreeting();

// class Customer extends Person {
//   constructor({ name = "customer", age = "n/a", contactMethod }) {
//     super(name, age);
//     this.contactMethod = contactMethod;
//     this.accountCredit = null;
//   }
//   addCredit(amount) {
//     this.accountCredit += amount;
//   }
//   reduceCredit(amount) {
//     this.accountCredit -= amount;
//   }
//   //Static methods are no available for the instances of the class
//   //it is for the class itself e.g here it is for customer not for customer1 or 2
//   static sayHi() {
//     console.log("HI :)");
//   }
//   static sayCustomerNames(...customers) {
//     for (const c of customers) {
//       console.log(c.name);
//     }
//   }
//   static transfreCredit(source, target) {
//     const amt = source.accountCredit;
//     target.accountCredit += amt;
//     source.accountCredit -= amt;
//   }
// }
// const customer1 = new Customer({ name: "Billy Rose", contactMethod: "Email" });
// const customer2 = new Customer({ name: "jane doe", contactMethod: "number" });
// const customer3 = new Customer({ name: "Kim jisoo", contactMethod: "number" });

// customer1.addCredit(100);
// customer1.reduceCredit(50);
// customer2.addCredit(25);
// Customer.sayCustomerNames(customer1, customer2, customer3);
// console.log(customer1.accountCredit);
// Customer.transfreCredit(customer2, customer1);
// console.log(customer1.accountCredit);

class FamilyMembers {
  constructor(lastName, firstName, relationship) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.relationship = relationship;
  }
  sayFamilyName() {
    console.log(`we are the ${this.lastName}s`);
  }
}
class FamilyGroup {
  constructor(parents = [], children = []) {
    this.parents = parents;
    this.children = children;
  }
}

const smithFamily = {
  1: ["Smith", "James", "Dad"],
  2: ["Smith", "Kate", "Mom"],
  3: ["Smith", "Will", "Son"],
  4: ["Smith", "Anna", "Daughter"],
};

const createFamily = (famObj) => {
  const newFamGroup = new FamilyGroup();
  for (const prop in famObj) {
    const [last, first, relationship] = famObj[prop]; //destructuring
    const newMembers = new FamilyMembers(last, first, relationship);
    if (relationship === "Dad" || relationship === "Mom") {
      newFamGroup.parents.push(newMembers);
    } else {
      newFamGroup.children.push(newMembers);
    }
  }

  return newFamGroup;
};
const theSmiths = createFamily(smithFamily);
console.log(theSmiths);
