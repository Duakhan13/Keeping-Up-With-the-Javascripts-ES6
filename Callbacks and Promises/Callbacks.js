/** @format */
/** Callback:
 * A way to write asynchronous JavaScript
 *
 * - A callback function is a function that is passed to another function
 * as a parameter.
 * - This inner function is called at some point during the execution
 * of the containing function
 * -In other words, it's "called back" at some specified point inside
 * the containing function's body
 */
//simple example of a callback
// function shouldGoFirst(callBack) {
//   setTimeout(() => {
//     console.log("I should always go first");
//     callBack();
//   }, 1000);
// }

// function shouldGoSecond() {
//   console.log("I should always go second");
// }
// shouldGoFirst(shouldGoSecond);

function sumUpNumber(num1, num2, callBack) {
  let summedValue;
  setTimeout(() => {
    summedValue = num1 + num2;
    callBack(summedValue);
  }, 1000);
}
function logSummedValue(value) {
  console.log(`The summed total is ${value}`);
}
//sumUpNumber(100, 50, logSummedValue);

//callback function
function sayWhenDone(loopCount) {
  console.log(`capatalized ${loopCount} names`);
}
//parent function
function looper(arr, callBack) {
  let i;
  for (i = 0; i < arr.length; i++) {
    const names = arr[i];
    const capitalizedName = names.charAt(0).toUpperCase() + names.slice(1);
    arr[i] = capitalizedName;
  }
  callBack(i);
}
const myNames = ["chris", "russell", "bella", "broody", "sammy"];
//looper(myNames, sayWhenDone);
// console.log(myNames);

// function anotherLooper(num1, num2, cb) {
//   const squaredAndSummedNums = num1 * num1 + num2 * num2;
//   console.log(squaredAndSummedNums);
//   cb();
// }
// anotherLooper(10, 50, function () {
//   console.log("Heyy!");
// });

//example with server side callback working
// const myDiv = document.getElementById("main");
// const myButton = myDiv.querySelector("button");
// const fakeData = {
//   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec risus mauris, sagittis ac venenatis sit amet, ornare ac tellus",
// };
// myButton.addEventListener("click", function () {
//   console.log("Clicked");
//   requestData(populateDom);
// });

// function requestData(cb) {
//   //fake server request and response
//   setTimeout(() => {
//     //response from server
//     const data = fakeData.text;
//     cb(data);
//   }, 2000);
// }
// function populateDom(data) {
//   myDiv.innerHTML += `<p>${data}</p>`;
// }

//callback hell example

function counter() {
  setTimeout(() => {
    console.log("First");
    setTimeout(() => {
      console.log("Second");
      setTimeout(() => {
        console.log("third");
        setTimeout(() => {
          console.log("fourth");
        }, 400);
      }, 600);
    }, 800);
  }, 1000);
}

// counter();
