/** @format */
//keydown will give the key your are pressing currently
// document.addEventListener("keydown", function (e) {
//   console.log(e.key);
// });
//keyup will give the key that you pressed
// document.addEventListener("keyup", function (e) {
//   console.log(e.key);
// });

const div3 = document.getElementById("div3");
const para = div3.querySelector("p");
const textArea = div3.querySelector("textarea");
const paraText = "User is typing";
let timer;
textArea.addEventListener("keydown", addText);
textArea.addEventListener("keyup", removeText);
function addText(e) {
  para.innerText = paraText;
}
function removeText(e) {
  clearTimeout(timer);
  timer = setTimeout(() => {
    para.innerText = "";
  }, 1000);
}
