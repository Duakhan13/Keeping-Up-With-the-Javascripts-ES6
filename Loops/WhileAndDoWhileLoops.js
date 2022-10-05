/** @format */
//noprotect
//Loops
//Quick and easy way to do something repeatedly
/*
Many types of loops but they all do basically the same things:
repeat something (i.e an action) a set number of times(could even be 0)
*/
//while loops
/*
while(condition){
    statement
}
*/
let numberOfLoops = 0;
while (numberOfLoops < 10) {
  console.log("I am looping");
  console.log(numberOfLoops);
  numberOfLoops++;
}
let num1 = 0;
let num2 = 0;
while (num1 < 100) {
  num1++;
  num2 += num1;
  if (num1 === 50) {
    break;
  }
}
console.log(num2);
const names = ["chris", "Bob", "Joe", "Jane", "Billy"];
function nameLooper(arr, userName) {
  let index = 0;
  while (index < arr.length) {
    if (arr[index] === userName) {
      console.log(arr[index]);
      break;
    }
    index++;
  }
  console.log(index);
}
nameLooper(names, "Billy");

//do while loop
//the code insied the condition will execute atleast once before the condition is checked
/*
do{
    statement
}
while(conditiom)
*/
let ShouldRunOnlyOnce = true;
let index = 0;
do {
  console.log("Looping");
  index++;
  if (index === 10) {
    ShouldRunOnlyOnce = false; //here we are making the condition false to break out of loop
  }
} while (ShouldRunOnlyOnce);

let totalMoney = 100;
do {
  checkIfCanPurchase();
} while (totalMoney > 500);
function checkIfCanPurchase() {
  if (totalMoney > 500) {
    console.log("can purchase");
  } else {
    console.log("can purchase");
  }
}
