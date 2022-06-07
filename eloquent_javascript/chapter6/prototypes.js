// prototypes
// -------------------------------------------------------------------

// In javascript most objects have a prototype
// A prototype is another object that is used as a fallback source of properties
// The prototype of all objects is Object.prototype

// -------------------------------------------------------------------

// Object.getPrototypeOf returns the prototype of a object
const emptyObject = {}; // a variable that contains a empty object
console.log(Object.getPrototypeOf(emptyObject) == Object.prototype); // checks wether the variable called emptyObject is a Object.prototype. If it is a boolean value of true is returned. If the variable called emptyObject contains a different data type e.g. array object. Then a boolean value of false is returned.

const emptyArray = []; // a variable that contains a empty array
console.log(Object.getPrototypeOf(emptyArray) == Array.prototype); // checks wether the variable called emptyArray is a Array.prototype. If it is a boolean value of true is returned. If the variable called emptyArray contains a different data type e.g. object object. Then a boolean value of false is returned.

const functionPrototype = Math.max; // a variable that contains a Math object function
console.log(Object.getPrototypeOf(functionPrototype) == Function.prototype); // checks wether the variable called functionPrototype is a Function.prototype. If it is a boolean value of true is returned. If the variable called functionPrototype contains a different data type e.g. array object. Then a boolean value of false is returned.

// -------------------------------------------------------------------

// toString converts a object to a string representation

// -------------------------------------------------------------------

let protoDog = {
  // a prototype object that contains a object method
  eats(food) {
    console.log(`My dog ${this.name} likes to eat ${food}`);
  }, // shorthand way of defining a object method in a method
};

let dog1 = Object.create(protoDog); // Object.create() is used to create a object prototype
dog1.name = "Bruno";
dog1.eats("Chicken");

let dog2 = Object.create(protoDog); // Object.create() is used to create a object prototype
dog2.name = "Queen";
dog2.eats("Beef");
