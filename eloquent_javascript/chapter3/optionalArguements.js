// Optional arguements - functions
// -------------------------------------------------------------------

// functions with optional arguements
let multiplication = (a, b, c = 2) => {
  console.log(a * b * c);
};
// The variable c inside the function called multiplication was not given during the function call. Therefore the default value of c, which is 2 was used.
multiplication(2, 4); // function called

// -------------------------------------------------------------------

// functions with missing arguements that where defined as function parameters will default to a empty value of undefined if not given as arguements when the function is being called
let multiply = (a, b) => {
  if (b === undefined) {
    // checks if b is strictly equal to undefined
    return -a; // console.log this ouput if the variable does contain an empty value of undefined
  }
  return a * b; // else console.log this output
};
console.log(multiply(20)); // No value was given for the variable b in the multiply function when this function was called. Therefore the value of b defaults to undefined

// -------------------------------------------------------------------

/* functions with extra arguements passed that where not defined as function parameters
will be ignored. Therefore, they won't effect the function returning variables
that were defined as paramets in the function. */

let data = (name, age) => {
  // function has only 2 parameters
  return `My name is ${name} and I'm ${age} years old.`;
};

console.log(data("John", 25, "London", "England")); // function call only requires 2 arguments but 2 more undefined arguments are added. Therefore the function ignores them and only outputs the first two arguements.
