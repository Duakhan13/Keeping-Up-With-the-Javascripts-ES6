/** @format */

const div2 = document.getElementById("div2");
//it prevents the user from performing a certain task
const myLink = div2.querySelector("a");
myLink.addEventListener("contextmenu", function (event) {
  event.preventDefault();
  alert("Not Today Satan hehehe :P");
});
const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", addToList);
//in this function we are taking input from user and showing it on web page
//by appending it as a child node of form
function addToList(e) {
  e.preventDefault();
  const myInput = document.getElementById("myInput").value; //Here we are getting the value of everything we are typing in the input
  const newH1 = document.createElement("h1");
  newH1.innerText = myInput;
  myForm.appendChild(newH1);
  myForm.reset();
}
