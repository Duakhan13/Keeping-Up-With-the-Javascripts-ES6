/** @format */

const bankAccountBalance = 1;
const costOfitem = 123;
const tax = 0.5;
const canSpendMoney = true;
const hasCreditCard = true;
const creditLimit = 200;
const hasReachedCreditLimit = false;

//&& is an AND logical operator
if (bankAccountBalance >= costOfitem && canSpendMoney && costOfitem < 150) {
  console.log("You can purchase this item!");
}

// || is an OR logical operator
if (bankAccountBalance >= costOfitem || (hasCreditCard && creditLimit >= costOfitem)) {
  console.log("You can purchase this item!");
}

// ! is a NOT logical operator, basically checks if the value is false
if (bankAccountBalance >= costOfitem || (hasCreditCard && !hasReachedCreditLimit)) {
  console.log("Congrats, You Can Purchase :)");
}

//you can also use NOT operator to check if a value is undefined or null
let myName;
console.log(!myName); //this will be true since the value is undefined
