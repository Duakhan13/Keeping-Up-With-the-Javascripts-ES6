/**@format
 * Destructuring
 * "The destructuring assignment syntax is a JavaScript expression
 *  that makes it possible to unpack values from arrays,
 *  or properties from objects, into distinct variables"
 * Destructuring syntax can be used onleft-hand side of assignment
 *
 *
 */
//this is the old way of extracting out one value from an array
const myArray = [1, 2, 3, 4, 5, 6];
const firstNum = myArray[0];
console.log(`without ES6 ${firstNum}`);
//ES6 way of extracting one value out
const [x, y, z] = myArray;
console.log(`WIth ES6 ${x}`);

const mySecondArray = ["Jane Doe", "Billy Jean", "Meredith Grey", "Kim Jisoo"];
let a, b, c, d, e;
[a, b, c, d, e = "Kim Jennie"] = mySecondArray;
console.log(a, b, c, d, e);

let aa = 100;
let bb = 200;
let cc = 300;
//this is the old way of swapping values
let temp = cc;
console.log(aa, bb, cc);
cc = bb;
bb = temp;
console.log(aa, bb, cc);

//with destructuring
[bb, cc] = [cc, bb];
console.log(aa, bb, cc);

//use with function
function returnArray() {
  return ["donuts", "chocolate", "candy", "gummy bears"];
}
const [donuts, choclate, candy, gummybears] = returnArray();
console.log(candy);

function foodfilter(arr, term) {
  return arr.filter((t) => t === term);
}
const [result] = foodfilter(["chicken", "fish", "meat", "tofu"], "chicken");
console.log(result);

//can ignore some values
const anotherArr = [10, 20, 30, 40, 50];
const [num1, num2, , num3, num4] = anotherArr; //here we ignored the 30 value
console.log(`first: ${num1} second: ${num2} third:${num3} fourth:${num4}`);

// can use rest pattern
const yetAnotherArr = ["dogs", "cats", "snakes", "hedgehogs"];
const [dogString, ...otherAnimal] = yetAnotherArr;
console.log(dogString);
//console.log(otherAnimal);
const filter = otherAnimal.filter((a) => a === "snakes" || a === "cats");
console.log(filter);
