// rest
// rest has to be the last item in an array
// rest used in an array
let numbers = [a, b, ...rest] = [0, 1, 2, 3, 4, 5];
console.log(a);
console.log(b);
console.log(rest);

// rest used within an object
// rest can be called anything as long as it begins with 3 dots
let {name, ...more} = {
  name: 'Jay',
  age: 28,
  city: 'London',
  school: 'University of Greenwich'
}

console.log(name);
console.log(more);


// rest used within a function
function greet(...names) {
  names.forEach(n => {
    console.log(`Hi ${n}`)
  })
}

greet('James', 'Collins', 'Mam');

// further reading:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
