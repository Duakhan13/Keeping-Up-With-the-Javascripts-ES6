/** @format */
const myObj = { firstName: "Chris", lastName: "smith", age: 20, height: "6ft" };
const { firstName, lastName, age, height } = myObj;
// console.log(firstName);

let myVar1, myVar2;
const myObj2 = { myVar1: "A", myVar2: "B" };
({ myVar1, myVar2 } = myObj2); //using this type will help in destructuring objects
// console.log(myVar1);

//Assigning new variable names
const myObj3 = { a: "cool", b: "oh yea", c: "nice", d: "awesome" };
const { a: cool, b, c, d } = myObj3;
// console.log(d, cool);
const myObj4 = { uuid: 1231231, username: "aweqwdnj", loggedIn: new Date() };
const { uuid: userID, username: name, loggedIn: lastLoginDate } = myObj4;
// console.log(userID, name, lastLoginDate);

//Defaults
const myObj5 = { a1: 10, b1: 20, c1: 30, d1: 40 };
const { a1, b1, c1, d1, e1 = 50 } = myObj5;
// console.log(a1, b1, c1, d1, e1);

//functions

// function stateUser(obj) {
//   const { user = "bob", memberTYpe } = obj;
//   console.log(user, memberTYpe);
// }
// const member = { user: "steve", memberTYpe: "free membership" };
// stateUser({ memberTYpe: "premium" });
// stateUser(member);

// function ifValid({ prop, ab }) {
//   const internalObj = {
//     prop,
//     ab,
//     constructed: true,
//   };
//   return internalObj;
// }
// const myObj6 = {
//   prop: "I am valid",
//   proop: "I am not valid",
//   ab: "I am so not valid",
// };
// console.log(ifValid(myObj6));

const myObj7 = {
  title: "My Address book",
  entries: [
    {
      name: "Bob",
      number: "55-55-55",
      address: "123 Fake St",
      other: {
        cell: "00933",
        email: "bob@etc.com",
      },
    },
    {
      name: "Bill",
      number: "54-45-54",
      address: "123 Fakest St",
      other: {
        cell: null,
        email: "bill@etc.com",
      },
    },
    {
      name: "James",
      number: "545-454-545",
      address: "1234 Fakest St",
      other: {
        cell: "1234",
        email: "james@etc.com",
      },
    },
  ],
  myPhone: "55-111",
};
//here we are looping through the array inside entries
const { title, entries } = myObj7;
for (const {
  name,
  address,
  other: { cell, email },
} of entries) {
  console.log(`Name: ${name}, address: ${address}, cell:${cell} ,email:${email}`);
}

// const myObj8 = {
//   myProp1: "Ahhh!",
//   myProp2: [20, 30],
// };
// const {
//   myProp1,
//   myProp2: [xx, yy],
// } = myObj8;
// console.log(yy);
