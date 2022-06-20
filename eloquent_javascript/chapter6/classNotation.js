// Class notation
// -------------------------------------------------------------------

class Cat {
  // the class keyword is used to declare a class in JavaScript. It also allows us to define a constructor and set of methods in a single class
  constructor(type, name) {
    // the constructor keyword provides access to the constructor function. All it's parameters are bound to the Cat class and any instance variable that uses the Cat class
    this.type = type;
    this.name = name;
  }

  food(prey) {
    // a class method
    console.log(
      `This type of cat ${this.type} likes to hunt and eat a ${prey}`
    );
  }

  speed(mph) {
    // a class method
    `This type of cat ${this.type} can run a speed of ${mph}`;
  }
}

let tiger = new Cat("tiger", "diego"); // a instance variable that is bound to the class called Cat
tiger.food("zebra"); // a arguement that is passed into the parameter for the food method of the class called Cat
console.log(tiger.name); // returns the string value diego as this is bound to the constructor name of the class called Cat

// -------------------------------------------------------------------
let object = new (class {
  printMessage(name) {
    console.log(`Hello, ${name}`);
  }
})(); // a variable that is assigned to class without a variable class name

object.printMessage("Jay"); // arguement that will be passed into the pararmeter of the method called printMessage that is bound to a class
