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

class wildCat extends Dog {
  constructor(type, age, name) {
    super(type, age, name);
    this.diet = 'Carnivore diet';
  }

  training() {
    return `${this.name} needs to be socialised with the other cubs.`;
  }

  danger() {
    return `${this.type}'s are very dangerous animals are not suitable as pets.`;
  }
}

let wildCat1 = new wildCat('Lion', 3, 'Simba');
console.log(wildCat1.info());
console.log(wildCat1.danger());
console.log(wildCat1.danger());
console.log(wildCat1.diet);

// further reading:
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance
