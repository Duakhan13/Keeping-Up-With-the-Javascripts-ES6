/** @format */

//Document Object Model(DOM)
/**
 * Programming interface for html and xml documents
 * Provides a structured represtation of the document
 * Defines methods to access the structure and manipulate it
 * Connects web pages to scripts or programing languages
 * DOM is NOT a programming language, it provides a model of a web page
 * The page content is stored in the DOM and can be accessed and manipulated in JS
 */
/******** Introduction to dom code **************/
document.body.innerHTML = "<h1>Something else</h1>";
const myTag = document.getElementsByTagName("P");
console.log(myTag[2].innerHTML);
myTag[2].innerHTML = "I loveee cats";
for (let p of myTag) {
  p.innerHTML = "Renamed";
}

//*******Getting Element by Ib Code **********/

const ID = document.getElementById("identifier");
ID.innerText = "We all";

//sub quering
const myAppDiv = document.getElementById("app");
const specialWords = myAppDiv.getElementsByTagName("span");
const totalWordsChanged = document.getElementById("total");
for (const prop of specialWords) {
  prop.innerHTML = "TESTTT";
}
totalWordsChanged.innerHTML = specialWords.length;

const membersUl = document.getElementById("members");
const allMembersName = document.getElementsByTagName("LI");
for (const member of allMembersName) {
  if (member.innerHTML === "Jennie") {
    member.innerHTML = "I love Jennie";
  }
}

/********The Query Selector code ********/

const dummyDivs = document.querySelectorAll(".dummy");
for (const div of dummyDivs) {
  div.style.color = "red";
}

/******ID AND CLASSES Code ********/
const elementID = document.getElementById("footer");
const elID = elementID.id;
const replacementID = "bottom";
elementID.id = replacementID;
console.log(elementID.id);

//here we are giving an id to the last div in the body
const el = document.getElementsByTagName("div");
const footerDiv = el[el.length - 1];
footerDiv.id = "footer";
const dummyDiv = document.querySelector(".dummy span");
console.log(dummyDiv.className);

const purpleDivs = document.querySelectorAll(".purple");
//this is going to add  a class instead of replacing the existing class
for (const prop of purpleDivs) {
  prop.classList.add("foo");
}
//this is going to remove a class
setTimeout(() => {
  for (const prop of purpleDivs) {
    prop.classList.remove("foo");
  }
}, 1000);
// this is going to toggle the class
setInterval(() => {
  for (const prop of purpleDivs) {
    prop.classList.toggle("foo");
  }
}, 3000);

/************ Elements Code ************/
const creationDiv = document.getElementById("created");
const newElement = document.createElement("div");
newElement.innerText = "I was created by science";
newElement.classList.add("purple", "foo");
creationDiv.appendChild(newElement);

//here we are making three elements and appedning them within eachother
const myFaveIceCreams = ["vanilla", "chocolate", "cookiesAndCream", "blueberry", "hazelNut"];
const newUL = document.createElement("UL");

for (const prop of myFaveIceCreams) {
  const newLI = document.createElement("LI");
  newLI.innerText = prop;
  newUL.appendChild(newLI);
}

newElement.appendChild(newUL);
creationDiv.appendChild(newElement);

//here we are removing a child by using removechild o ul tag

function removeIceCream(Ice) {
  for (const prop of newUL.childNodes) {
    if (prop.innerText === Ice) {
      newUL.removeChild(prop);
    }
  }
}

removeIceCream("vanilla");
