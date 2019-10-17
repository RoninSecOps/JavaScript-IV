// CODE here for your Lambda Classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
  }
  function(foodEat) {
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
