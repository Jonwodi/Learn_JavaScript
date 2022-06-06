// null
let name = null;
// name = 'Jay';
console.log(name);

// undefined
let x;
console.log(x);

let y = undefined;
console.log(y);

let obj = {greeting: 'Hello'};
console.log(obj.greeting);
console.log(obj.country);

// check if null or undefined
console.log(typeof(x));
console.log(typeof(name));

if (name === null || name === undefined) {
  console.log('I am null or undefined');
} else {
  console.log(name)
}

// nullish operator
let amount = null;
let age = undefined;
let pay = 50;
console.log(amount ?? 'I am null or undefined');
console.log(amount ?? 'I am null or undefined');
console.log(pay ?? 'I am null or undefined');

// further reading:
// https://stackoverflow.com/questions/5076944/what-is-the-difference-between-null-and-undefined-in-javascript
