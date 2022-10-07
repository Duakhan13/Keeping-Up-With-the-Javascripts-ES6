/** @format */

function Animal(name, age) {
  this.name = name;
  this.age = age;
}
Animal.prototype.makeNoise = function () {
  console.log(`generic animal noise`);
};

function Dog(name, age, breed) {
  Animal.call(this, name, age);
  this.breed = breed;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.makeNoise = function () {
  console.log(`Bark Bark ,woof`);
};
const barky = new Dog("Barky", 1, "Chihuahua");
console.log(barky.name);
barky.makeNoise();

function Cat(name, age, coloration) {
  Animal.call(this, name, age);
  this.coloration = coloration;
}
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;
Cat.prototype.makeNoise = function () {
  console.log(`meow mewoww`);
};
Cat.prototype.scratchPost = function () {
  console.log(`Scratched the sofa`);
};
const meredith = new Cat("Mer", 1, "White");
console.log(meredith.coloration);
meredith.makeNoise();

//doing sort of nested inheritance
//here kitten inhertis form cat prototype and
// cat inhertis from the animal prototype
function kitty(name, age, coloration, litter) {
  Cat.call(this, name, age, coloration);
  this.litter = litter;
}
kitty.prototype = Object.create(Cat.prototype);
kitty.prototype.constructor = kitty;

const tinyKitten = new kitty("leo", 0.3, "grey", 2);
console.log(tinyKitten.litter);
tinyKitten.makeNoise();

console.log(tinyKitten instanceof Cat);
console.log(tinyKitten instanceof kitty);
console.log(tinyKitten instanceof Animal);
console.log(tinyKitten instanceof Dog); //since it is not inheriting anything from dog it wont be an instance of Dog
