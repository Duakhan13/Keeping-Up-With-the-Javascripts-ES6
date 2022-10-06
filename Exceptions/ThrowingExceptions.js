/** @format */

//Exception handling
//Throw your own exception
/**
 * use to throw statement to throw own exception
 * you specify the expression containig the value to be thrown
 * e.g throw expresssion
 * can throw any expression
 */
function checkIfNum(n) {
  if (isNaN(n)) {
    throw "This is not a number";
  } else {
    console.log(n);
  }
}
checkIfNum("he");
checkIfNum(9);

function myException(message) {
  this.message = message;
  this.name = "My exception";
  this.toString = function () {
    return this.name + " : " + this.message;
  };
}
throw new myException("Filed Invalid");
