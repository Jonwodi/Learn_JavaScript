// Higher Order Functions
// -------------------------------------------------------------------

// functions that operate on other functions, either by taking them as arguemments or by returning them are called higher order functions
// higher order functions allow us to abstract over actions, not just values

// -------------------------------------------------------------------

// functions that create other functions
function greaterThan(n) {
  return (m) => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

// -------------------------------------------------------------------

// The for of loop as higher order function
let names = ["John", "James", "Jimmy", "John"];

names.forEach((name) => console.log(`My name is ${name}`)); // forEach higher order function is shorter version of the for of loop that used to iterate over items in an array
