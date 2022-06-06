class Dog {
  constructor(type, age, name) {
    this.type = type;
    this.age = age;
    this.name = name;
  }

  info() {
    return `This ${this.type}'s name is ${this.name}, he is ${this.age} months old. `;
  }

  training() {
    return `${this.name} sit, now fetch.`;
  }
}

let dog1 = new Dog('Pitbull', 4, 'Tank');
console.log(dog1.info());
console.log(dog1.training());

let dog2 = new Dog('Rottweiler', 6, 'Hulk');
console.log(dog2.info());
console.log(dog2.training());

// further reading:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
