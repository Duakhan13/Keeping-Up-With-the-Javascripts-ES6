/** @format */
/**
 * - "A promise is a proxy for a value ot necessarily known
 *  when the promise is created" -MDN
 * - Promises (similar to callbacks) are used for asyn computations.
 * - Think of a promise as representing as a value that may be available
 * now, later or never
 * - Can associate a handle with an async action
 * - A promise exists in these states
 * - Pending: intial sate, not fulfiled
 * - Fulfile: Ok Got it
 * - Rejected: failed
 */
// const testPromise = new Promise((resolve, reject) => {
//   if (Math.random() > 0.5) {
//     reject("Promise no good! rejected");
//   }
//   setTimeout(() => {
//     resolve("promise ok!");
//   }, 1000);
// });

// testPromise
//   .then((resolveMessage) => {
//     console.log(`Looks like: ${resolveMessage}`);
//   })
//   .then(() => {
//     console.log("I should run after promise is resolved");
//   })
//   .catch((rejectMessage) => {
//     console.log(`Error ${rejectMessage}`);
//   });

// function numAdder(n1, n2) {
//   return new Promise((resolve, reject) => {
//     const addedNums = n1 + n2;
//     setTimeout(() => {
//       resolve(addedNums);
//     }, 500);
//   });
// }
// function numSquarer(num) {
//   return new Promise((resolve, reject) => {
//     const squaredNums = num * num;
//     setTimeout(() => {
//       resolve(squaredNums);
//     }, 500);
//   });
// }
// numAdder(10, 10)
//   .then((data) => numSquarer(data))
//   .then((moreData) => console.log(moreData));

// function alwaysResolves() {
//   return Promise.resolve("I love resolving");
// }
// alwaysResolves().then((data) => console.log(data));

// const prom = Promise.resolve([10, 20, 30]);
// prom.then((num) => num.map((num) => num * 10)).then((transformedNums) => console.log(transformedNums));

//example of reject
// Promise.reject()
//   .then(
//     (res) => {
//       console.log("not rejected");
//     },
//     (err) => {
//       console.log("rejected");
//     }
//   )
//   .catch((data) => console.log(data));

function timeLogger(message, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, time);
    if (typeof message !== "string" || typeof time !== "number") {
      reject("incorrect input");
    }
  });
}

// timeLogger("first", 1000)
//   .then((message) => {
//     console.log(message);
//     return timeLogger("second", 800);
//   })
//   .then((message) => {
//     console.log(message);
//     return timeLogger("third", 600);
//   })
//   .then((message) => {
//     console.log(message);
//     return timeLogger("fourth", 400);
//   })
//   .then((message) => console.log(message))
//   .catch((err) => console.log(err));

//return in then
//effectively same as saying return promise.resolve(...)
// Promise.resolve("hi")
//   .then((string) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(string + " there,");
//       }, 1);
//     });
//   })
//   .then((string) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         string += " chris";
//         resolve(string);
//       }, 1);
//     });
//   })
//   .then((string) => {
//     console.log(string);
//   });

//promise.all
const userName = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ text: "Ba-ba-ba-ba-ba-nana Ba-ba-ba-ba-nana Banana-ah-ah" });
  }, 1000);
});
const position = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ text: "minions" });
  }, 300);
});

Promise.all([userName, position])
  .then((data) => data.map((entry) => entry.text))
  .then((content) => console.log(content));
