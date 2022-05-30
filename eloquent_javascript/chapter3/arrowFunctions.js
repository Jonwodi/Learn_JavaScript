// Arrow functions
// arrow functions use a equal to and greater than sign (=>) after the function parameters to followed by the function body to denote a arrow function
// -------------------------------------------------------------------

// arrow function with parameters
let divsion = (a, b) => {
  return a / b;
};
console.log(divsion(100, 2)); // function call with arguements

// -------------------------------------------------------------------

// arrow function with no parameters
let addition = () => {
  return 100 + 10;
};
console.log(addition()); // function call with no arguements

// -------------------------------------------------------------------

// single line arrow functions
// arrows functions can be written on one line if it only has a maximum of 1 parameter and single expression in the body.
let name = (input) => `My name is ${input}`; // The return keyword is not needed for single line arrow functions
console.log(name("Sean")); // function call with 1 arguement
