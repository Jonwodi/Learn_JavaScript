// Rest parameters
// -------------------------------------------------------------------

// Rest allows you to pass multiple items into an array
// Rest parameters allows any number of arguements or an array of arguements to be passed into a function.
// To use rest parameters you just put 3 dots before a arguement. For example, '...numbers'

// -------------------------------------------------------------------

let multiplication = (...numbers) => {
  // ...numbers allows multiple arguements to be passed into this function when the function is called
  for (let number of numbers) {
    return number * number * number;
  }
};

console.log(multiplication(5, 5, 4));

// -------------------------------------------------------------------

// a arrow function that works out the maximum number in an array. It is similar to the Math.max function.
let max = (...numbers) => {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
};
console.log(max(100, 400, 500, 5));

// -------------------------------------------------------------------

// You can create a array with as many items as possible and use (...) before the variable that contains the array which will give access to all items in an array
let numberList = [2, 12, 144, 5];
console.log(Math.max(...numberList)); // Using ...numberList gives access to all items in numberList

let names = ["John", "Johnny", "Gabs", "Jess", "Steve"];
console.log(...names.join(" | "));

// -------------------------------------------------------------------

// The rest method allows you to add other arguements that were referecend using the rest parameter
let cities = ["London", "New York", "Manchester"];
console.log(["Mexico city", ...cities, "Liverpool"]);
