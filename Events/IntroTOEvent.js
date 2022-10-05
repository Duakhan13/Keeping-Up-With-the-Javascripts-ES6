/** @format */

//Events
/**
 * Any event that takes place in the DOM
 * can be user generated or by API
 * Many tyoes of events
 * Event contains properties and methods
 * addEventListner function takes in the event
 * to listen for, and a second argument to be called whenever the described event fires.
 * addEventListner("click", function(){
 * logic inside function
 * })
 * */
const btnClick = document.querySelector("button");
btnClick.addEventListener("click", logEvents);
//btnClick.addEventListener("focus", logEvents);

function logEvents(e) {
  btnClick.innerText = e.timeStamp;
  btnClick.removeEventListener("click", logEvents);
  console.log(e.type);
}

const clickableDiv = document.getElementById("background");
const listItems = clickableDiv.querySelector("UL");
document.addEventListener("click", addOrangeBackground);
listItems.addEventListener("click", addGreenBackground);
//this function will change the background if you click ion the text and sets it back to normal if you click elsewhere
function addOrangeBackground(e) {
  const hasBeenClicked = clickableDiv.contains(e.target);
  console.log(hasBeenClicked);
  if (hasBeenClicked) {
    clickableDiv.classList.add("backgroundDiv");
  } else {
    clickableDiv.classList.remove("backgroundDiv");
  }
}
function addGreenBackground(e) {
  e.stopPropagation(); //this will stop the event from bubbling up the dom
  const targetLi = e.target;
  if (targetLi.nodeName === "UL") {
    return;
  }
  const green = document.querySelector(".green");
  if (green) {
    green.classList.remove("green");
  }
  targetLi.classList.add("green");
}
