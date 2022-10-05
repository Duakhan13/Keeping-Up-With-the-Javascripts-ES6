/** @format */

//For loops
//Repeat untill a specified condition evaluates to false
/*
for(initital expression; condition;increment expression){
    statement
}
*/
const iceCreams = ["vanilla", "chocolate", "strawberry", "cookiesNcreams"];
function iceCreamLooper(arr, type) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === type) {
      console.log(arr[i] + " " + "is at position " + i);
    }
  }
}
iceCreamLooper(iceCreams, "vanilla");
//simple fizzbuzz
for (let index = 0; index <= 100; index++) {
  if (index % 15 === 0) {
    console.log("Fizz Buzz");
  } else if (index % 3 === 0) {
    console.log("Fizz");
  } else if (index % 5 === 0) {
    console.log("Buzz");
  }
  console.log(index);
}

for (let index = 0; index <= 100; index++) {
  if (index % 15 === 0) {
    continue;
  } else if (index % 3 === 0) {
    continue;
  } else if (index % 5 === 0) {
    continue;
  }
  console.log(index);
}
let x = 0;
while (x < 10) {
  x++;
  if (x === 5) {
    console.log("Im being skipped");
    continue;
  }
  console.log(x);
}
//here we can label our loops and use them to break or continue
outerLoop: for (let index = 0; index < 10; index++) {
  console.log("Loop # " + index);
  innerLoop: for (let a = 0; a < 10; a++) {
    console.log("Inner loop # " + a);
    if (a === 3) {
      break innerLoop;
    }
    if (index === 5) {
      break outerLoop;
    }
  }
}

//setTimeout is a builtin function to give a timeout before a function is triggered
//this is how you can do it without es6
function looper(value) {
  setTimeout(() => {
    console.log(value);
  }, value * 1000);
}
for (var i = 0; i < 10; i++) {
  looper(i);
}

//we can do same thing using let

for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 500);
}
