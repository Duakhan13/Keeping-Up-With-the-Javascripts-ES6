/** @format */

function squareAndMultiply(num1, num2) {
  let testLet = "I am a test";
  function squarer(x) {
    console.log(testLet);
    return x * x;
  }
  function multiplyByTen(y) {
    return y * 10;
  }

  return squarer(num1) * multiplyByTen(num2);
}
const first = squareAndMultiply(4, 4);
const second = squareAndMultiply(10, 2);
console.log(first, second);

//this function takes firstname lastname and age as parameter and return an object
function personFormatter(firstName, lastName, age) {
  //this function concatenates string into one string
  function formatNames(arg1, arg2) {
    return arg1 + " " + arg2;
  }
  //this function formats data into an object
  function dataFormatter(fullName, num) {
    const formattedData = {
      name: fullName,
      age: num,
    };
    return formattedData;
  }
  const formattedName = formatNames(firstName, lastName);
  return dataFormatter(formattedName, age);
}
console.log(personFormatter("Chris", "Jones", 20));
