/**@format
 * Template Literals
 * String literals alowing embedded expressions
 * Makes it easier to create multiline strings and
 * allows string interpolation
 * Enclosed in back-ticks (`String goes here`) instead of
 * single qoutes('') or double qoutes("")
 * can conatun placeholders
 */

// var myFirstName = "Chris";
// var myLastName = "Smith";
// var myAge = "22";
// console.log("hello, " + myFirstName + " " + myLastName + " " + myAge);

// var myNewList = "<ul>\n" + "<li>Iam Item 1\n" + "<li>Iam Item 2\n" + "<li>Iam Item 3\n" + "</ul>";
// const myDiv = document.getElementById("myDiv");
// myDiv.innerHTML = myNewList;
// ES6 below

const myOtherNewList = `<ul>
<li>hey 2</li>
<li>hey 3</li>
<li>hey 4</li>
<li>hey 5</li>
</ul>`;
myDiv.innerHTML = myOtherNewList;

const first = "Sally";
const second = "smith";
const age = 52;
const fullNameAndAge = `${first} ${second}, age: ${age}`;
console.log(`Hello ${first} ${second} your are ${age} years old today `);
console.log(`Hello ${fullNameAndAge}`);

const isTrue = true;
console.log(`Is true: ${!isTrue}`);

const dateNow = new Date();
console.log(`Today is: ${dateNow.toLocaleString()}`);

// const myArray = [1, 2, 3, 4, 5];
// console.log(`${myArray.map((num) => num + 5)}`);
const pizzaToppings = ["cheese", "pepperoni", "mushrooms", "sauce", "pinapple"];
const myPizzaArticle = `<article>
    <h1>Pizza Ingredients</h1>
    <ul>
    ${pizzaToppings.map((toppings) => `<li>${toppings}</li>`).join("\n")}
    </ul>
    </article>`;
const pizzaDiv = document.getElementById("pizzaDiv");
pizzaDiv.innerHTML = myPizzaArticle;
