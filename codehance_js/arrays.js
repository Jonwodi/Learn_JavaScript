// array is list of values assigned to variable

// creating a array
let names = ['James', 'Jordan', 'Sean'];
console.log(names);

// retrieve values from an array
console.log(names[0]);
let name = names[names.length - 2];

// channging array values
names[2] = 'Dave';

// adding values to an array
names.push('Sean')  
console.log(names);

// deleting items in an array

// delete names[2];
names.slice(2,1);
console.log(names);
console.log(names.length);
console.log(name);

// further reading:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
