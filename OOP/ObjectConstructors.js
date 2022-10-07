/** @format */

function Animal(name, age, breed) {
  this.name = name;
  this.age = age;
  this.breed = breed;
  //instead of doing it like this do it outside the method
  //   this.sayBreed = function () {
  //     console.log(`My breed is  ${this.breed}`);
  //   };
}
Animal.prototype.sayBreed = function () {
  console.log(`I am a ${this.breed}`);
};

const dog1 = new Animal("Spike", 3, "Labrador");
//dog 1 inhertis from prototype Animal,
//which inhertis from prototype object
console.log(dog1.name, dog1.age);
dog1.sayBreed();
//if we define the prototype outside the methode then we can redefine it too
Animal.prototype.sayBreed = function () {
  console.log(`${this.breed} is the best :D`);
};
dog1.sayBreed();
