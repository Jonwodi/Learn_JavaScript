// Classes
// -------------------------------------------------------------------

// A class defines the shape of a type of object. For example, what type of properties and methods a object has. Such a object is called an instance of a class.

// -------------------------------------------------------------------

// A constructor function
function Cat(type) {
  // function's first letter is capitalized to distinguish it from other functions and identify it as a constructor fucntion
  this.type = type;
}
Cat.prototype.food = function (prey) {
  // the constructor function Cat is Object prototype therefore new methods can be added to it. The method food is added to the Cat Object prototype
  console.log(`This type of cat ${this.type} likes to hunt and eat a ${prey}`);
};

let tiger = new Cat("tiger"); // using the new keyword before a prototype object means that the variable tiger is bound to the Cat Object prototype and that the Cat Object prototype is a constructer function for the variable called tiger
tiger.food("zebra"); // arguement for the prey parameter of the food method of the Cat Object prototype

console.log(Object.getPrototypeOf(Cat) == Function.prototype); // returns a boolean value of true because the constructor function called Cat object prototype is a Function prototype because all constructors are functions
console.log(Object.getPrototypeOf(tiger) == Cat.prototype); // returns a boolean value of true because the variable called tiger is a instance of the Cat object prototype
