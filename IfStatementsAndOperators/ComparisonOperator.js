/** @format */

// === is known as identity operator, it just checks if two values are the same type and have same values
// == is known as equality operator, it checks for equality after it does type conversions

const numberFive = 5;
const stringFive = "5";
console.log(numberFive == stringFive); // here javascript is converting the number into a string for us
const stringConversion = parseInt(stringFive); //this converts the string to number
console.log(numberFive === stringConversion); //its always better to use triple equal sign

const myArray = [1, 2, 3];
const myOtherArray = [1, 2, 3];
console.log(myArray === myOtherArray); // this will be false since both arrays are pointing to different things
//this is for greater than operator
const AccountBalance = 123;
const itemCost = 120;
if (AccountBalance > itemCost) {
  console.log("You can purchase this item");
}

//this is for greater than equals to operator
const bankAccountBalance = 124;
const costOfitem = 123;
const tax = 0.5;
if (bankAccountBalance >= costOfitem + tax) {
  console.log("You can purchase this item");
}

//similarly for less than or less than equals to we use < or <= operator

//to find if the account balance is different than cost of item

if (bankAccountBalance !== costOfitem + tax) {
  console.log("I am running");
}
