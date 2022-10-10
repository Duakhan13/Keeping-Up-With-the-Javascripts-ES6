/** @format */

//Object property shorthands
const a = 10;
const b = 20;
const c = 30;
const d = {
  a: a,
  b: b,
  c: c,
};
//tis is basically doing the same thing
//assigning the keys to be the same as the value
const e = {
  a,
  bee: b,
  c,
};
//here we can do destructuring
const { bee } = e;
console.log(bee);

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
const { x } = bob[0];
console.log(x);
