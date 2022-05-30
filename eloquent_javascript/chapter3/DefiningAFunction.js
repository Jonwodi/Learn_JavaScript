// Functions
// -------------------------------------------------------------------

// functions start with the keyword function
// Functions can have have as many parameters as you want or no parameters at all

// -------------------------------------------------------------------

// functions defined using a variable multiplication
const multiplication = function(number) { // function with a parameter called number 
  return number * number; // the return keyword determines the value that the function will return
}

console.log(multiplication(3)); // function called using console.log function

// -------------------------------------------------------------------

// functions defined using a variable addition
const addition = function() { // function with no parameters
  let number = 3;
   console.log(number + number);
}

addition(); // function called

// -------------------------------------------------------------------

const empty = function() {
  return; // a return keyword without a statement after it, will cause the function to return a empty value of undefined when function is called
}

console.log(empty()); // function call

// -------------------------------------------------------------------

const empty2 = function() {
  // functions that don't have return keyword in their body will return an empty value of undefined when function is called
}

console.log(empty2());