/** @format */

//try catch statement

// try {
//   throw "Exception";
// } catch (e) {
//   console.log(e);
// }

// let myNum = "j";
// const myErrorLog = [];
// function checkIfNum(num) {
//   if (isNaN(num)) {
//     throw "not a number";
//   } else {
//     console.log(num);
//   }
// }
// function errorHandler(e) {
//   myErrorLog.push(e);
// }
// try {
//   checkIfNum(myNum);
// } catch (catchID) {
//   errorHandler(catchID);
// }
// console.log(myErrorLog.length);

// function MyString(string) {
//   if (typeof string === "string") {
//     this.value = string;
//     this.getValue = function () {
//       console.log("Your string: " + this.value + ".");
//     };
//   } else {
//     throw new StringExceptionError(string);
//   }
// }
// function StringExceptionError(value) {
//   this.value = value;
//   this.message = "Function requires a string";
//   this.toString = function () {
//     return this.value + " : " + this.message;
//   };
// }

// function verifyString(s) {
//   let str;
//   try {
//     str = new MyString(s);
//   } catch (e) {
//     if (e instanceof StringExceptionError) {
//       console.log("String exception" + e);
//     } else {
//       console.log("other exception");
//     }
//   } finally {
//     console.log("always runs");
//   }
//   return str;
// }
// const a = verifyString("I am a string");
// const b = verifyString(true);
// a.getValue();

function finallyExample() {
  try {
    console.log("Hi");
    throw "Test";
  } catch (e) {
    console.log(e);
    return true;
  } finally {
    console.log("can i run");
  }
}
finallyExample();
