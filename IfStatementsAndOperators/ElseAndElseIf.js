/** @format */

const bankAccountBalance = 1;
const costOfitem = 123;
const hasCreditCard = true;
const hasReachedCreditLimit = false;

if (bankAccountBalance >= costOfitem) {
  console.log("Congrats, You can pay for this with cash!");
} else if (hasCreditCard && !hasReachedCreditLimit) {
  console.log("Congrats, you can pay this with credit");
} else {
  console.log("Sorry, you can't afford :(");
}
