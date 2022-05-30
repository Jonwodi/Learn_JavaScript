// Closure
// the ability to be able to reference a specific instance of a local variable in a enclosing scope is known as closure
// -------------------------------------------------------------------

function nameValue(n) {
  // function parameter is called n
  let input = n;
  return () => `My name is ${input}`; // statement function will return when function is invoked
}

let name1 = nameValue("John"); // 1st instance o function nameValue is assigned to another function called name1 with a arguement
let name2 = nameValue("Jess"); // 2nd instance o function nameValue is assigned to another function called name2 with a arguement

console.log(name1()); // function called
console.log(name2()); // function called

// -------------------------------------------------------------------

function multiplier(factor) {
  // function parameter is called factor
  return (number) => number * factor; // returns number multiplied by factor
}

let twice = multiplier(2); // multiplier function is passed as a instance into a new function called twice with it's factor arguement which is the number value 2

console.log(twice(6)); // the twice function is logged into console with a arguement which will be assigned to the number variable defined on the return statement line of of the multiplier function
