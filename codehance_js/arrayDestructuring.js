// Array Destructuring
let cities = ['London', 'New york city', 'Los Angeles', 'Chicago'];

// let [first, second, third] = cities;
// console.log(first);
// console.log(third);

// Destructuring with rest
let [first, second, third, ...rest] = cities;
console.log(rest);

// further reading:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
