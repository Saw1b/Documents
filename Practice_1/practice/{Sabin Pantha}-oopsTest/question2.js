class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} Animal Speaks`);
  }
}
class Dog extends Animal {
  speak() {
    console.log(`${this.name} Dog Barks`);
  }
}
const dog = new Dog("Bub");
dog.speak();
const animal = new Animal("Gene");
animal.speak();