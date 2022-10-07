/** @format */

// Fetch API
//return a promise
const myDiv = document.getElementById("planet");
const myButton = document.getElementById("firstButton");
const secondButton = document.getElementById("otherButton");
myButton.addEventListener("click", getPlanet);
secondButton.addEventListener("click", getPlanets);

function getPlanets() {
  fetch(`https://swapi.dev/api/planets/`)
    .then((data) => data.json())
    .then((planets) => processPlanets(planets.results));
}

function processPlanets(planetsArray) {
  for (const [index, prop] of planetsArray.entries()) {
    populatePlanet(index, prop);
  }
}

function getPlanet() {
  const randomNum = Math.floor(Math.random() * 10) + 1;
  fetch(`https://swapi.dev/api/planets/${randomNum}`)
    .then((data) => data.json())
    .then((d) => populatePlanet(d))
    .catch((err) => console.log(err.message));
}
function populatePlanet(index, planetObj) {
  const { name, climate, terrain, population, rotation_period } = planetObj;
  let pop;
  let popu;
  if (population > 0 && population <= 1000000) {
    popu = "low";
  } else if (population > 1000000 && population <= 1000000000) {
    popu = "medium";
  } else if (population > 1000000000) {
    popu = "high";
  } else {
    popu = "unknown";
  }
  population === "unknown" ? (pop = population) : (pop = parseInt(population).toLocaleString());
  const planetDiv = `<div class="planet" data-planetID=${index} data-population=${popu}>
 <h1>${name}</h1>
 <p>${name} has a climate that is ${climate}. The terrain is ${terrain}, with a population of ${pop}. the rotation period is ${rotation_period}.</p>
 </div>`;
  myDiv.insertAdjacentHTML("beforeend", planetDiv);
}
const allPlanetsDivs = document.getElementsByClassName("planet");
const highlighter = document.getElementById("highlighter");
highlighter.addEventListener("click", showUnpopulated);
function showUnpopulated() {
  for (const prop of allPlanetsDivs) {
    if (prop.dataset.population === "unknown") {
      prop.style.backgroundColor = "yellow";
    }
  }
}

const selector = document.getElementById("selector");
selector.addEventListener("change", highLight);
function highLight(e) {
  const { value } = e.target;
  for (const prop of allPlanetsDivs) {
    prop.style.backgroundColor = "white";
    if (prop.dataset.population === value) {
      prop.style.backgroundColor = "teal";
    }
  }
}
