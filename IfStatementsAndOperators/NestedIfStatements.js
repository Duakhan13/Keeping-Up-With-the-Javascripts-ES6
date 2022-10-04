/** @format */

//an if statment inside an if statement

const bankAccountBalance = 124;
const costOfitem = 123;
const tax = 0.5;
if (bankAccountBalance >= costOfitem) {
  console.log("Balance ok! Checking tax");
  if (tax >= 0.5) {
    console.log("Tax amount too high!");
    if (100 === 100) {
      const myName = "Chris";
      console.log(myName);
    }
  }
}
