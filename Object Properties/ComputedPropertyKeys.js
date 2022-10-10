/** @format */

//computed property keys
//Allows use of [] which will evaluate(a.k.a compute)
//as the property name

let myId = 1;
const idParams = "userID";
const computedObj = {
  [idParams + myId++]: "1234",
  [idParams + myId++]: "5678",
};
console.log(computedObj);

function capatalizer(word) {
  const a = word.charAt(0).toUpperCase();
  const b = word.slice(1).toLowerCase();
  return a + b;
}
const obj111 = {
  [capatalizer("heLLo")]: "something",
};
console.log(obj111);

function objectBuilder(x, y, z, numTimes) {
  const allObjects = [];
  for (let i = 0; i < numTimes; i++) {
    const newObj = {
      x: i + 1,
      y,
      z,
    };
    allObjects.push(newObj);
  }

  return allObjects;
}
const bob = objectBuilder(10, "bob", false, 10);
function dataFormat(arr) {
  return arr.map((n) => {
    return {
      ["userID" + n.x]: n,
    };
  });
}
console.log(dataFormat(bob));
