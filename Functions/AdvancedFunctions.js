/** @format */
//Arrow functions
//the return keyword is iplicit in arrow functions
//arrow function helps us in making our code more concise
var sayHi = () => {
  console.log("Hi, I am using an arrow function");
};
sayHi();

const multiplier = (num1, num2) => {
  return num1 * num2;
};
console.log(multiplier(5, 10));

//you can declare an arrow function without the brackets and return keyword,
//if the function is only returning one simple thing for example.

const squarer = (num) => num * num;
console.log(squarer(5));

const users = [
  { name: "Chris", age: 60 },
  { name: "Jane", age: 20 },
  { name: "Billy", age: 40 },
];
const mapUserName = (myArr) => {
  const nameList = myArr.map((user) => {
    return user.name;
  });
  return nameList;
};
console.log(mapUserName(users));

// // we can simplify this above function due to arrow function
const mapUserNames = (myArr) => myArr.map((user) => user.age);
console.log(mapUserNames(users));

//filter creates a new array filled with elements that pass a test provided by the function
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter((num) => num % 2 === 0);
console.log(filteredNumbers);

//forEach loop
const numberDoubler = (num) => {
  const numberContainer = [];
  num.forEach((n) => {
    const doubled = n * 2;
    numberContainer.push(doubled);
  });
  return numberContainer;
};
console.log(numberDoubler(numbers));

//arguments with default values
const numMultiplier = (x = 5, y = 10) => x * y;
console.log(numMultiplier());
//string split method
const stringSpliter = (str = "How are you?") => str.split(" ");
console.log(stringSpliter());

//we can pass in default objects as parameter too
const bankAccount = {
  canSpendMoney: true,
  balance: 100,
};
const PurchaseItem = (price, acct = bankAccount) => {
  if (acct.canSpendMoney) {
    acct.balance -= price;
    if (acct.balance <= 0) {
      acct.canSpendMoney = false;
    }
    return true;
  } else {
    return false;
  }
};
console.log(PurchaseItem(100));
console.log(PurchaseItem(40, { canSpendMoney: false, balance: 40 }));

//spread, will give all the extra arguments passed in a function
function logAllArguments(x, ...nums) {
  console.log(nums.sort());
}
logAllArguments(10, 5, 1, 2, 3, 6);

//here we're multiplying the first argument with other arguments
function multiply(multiplier, ...nums) {
  return nums.map((n) => multiplier * n);
}
console.log(multiply(10, 5, 1, 3, 6));

//this is something we cannot do with arrow function
function Dog(years, breed) {
  this.age = years;
  this.type = breed;
}
const spike = new Dog(3, "Golden Retriever");
const fido = new Dog(5, "Poodle");
console.log(spike);
console.log(fido);
