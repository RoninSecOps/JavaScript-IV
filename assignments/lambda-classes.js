// CODE here for your Lambda Classes
class Person {
  constructor(attr) {
    this.name = attr.name;
    this.age = attr.age;
    this.stomach = [];
  }
  eat(foodEat) {
    if (this.stomach.length < 10) {
      this.stomach.push(foodEat);
    }
  }
  poop() {
    this.stomach = [];
  }
  toString() {
    return `${this.name}, ${this.age}`;
  }
}

// const mary = new Person('Mary', 50);
const mary = new Person({name:"Mary", age:50});
class Car {
  constructor(model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;
  }
  fill(gallons) {
    this.tank = this.tank + gallons;
  }
  drive(distance) {
    if (distance / this.milesPerGallon <= this.tank) {
      this.odometer = this.odometer + distance;
      this.tank = this.tank - distance / this.milesPerGallon;
    } else {
      this.odometer = this.odometer + this.tank * this.milesPerGallon;
      this.tank = 0;
      return `I ran out of fuel at ${this.odometer} miles!`;
    }
  }
}

class Baby extends Person {
  constructor(name,age, favoriteToy) {
    super(name, age);
    this.favoriteToy = favoriteToy;
  }
  play() {
    return `Playing with ${this.favoriteToy}`;
  }
}

const child = new Baby('Kate', 5, 'car');
  console.log(Person);
  console.log(child)
  console.log(Baby);
  console.log(mary);