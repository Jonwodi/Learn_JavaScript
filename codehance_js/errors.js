// type error
// [1,2,3].length();

//  syntax error
// console.log('hello);

// reference error
// console.log(doesNotExist);

// manually throwing errors
let name = 'Jordan';

if(typeof name !== 'string') {
  throw new Error('name must be a string');
} else {
  console.log(`My name is ${name}`);
}

// catching errors
let subject = 'Maths';
subject = 7;

try {
  if (typeof subject !== 'string') {
    throw new Error('name must be a string');
  } else {
    console.log(`My favourite subject is ${subject}`);
  }
} catch (e) {
  console.log(e.message);
}

try {
  [1,2,3].length();
} catch (error) {
  console.log(error.message);
}

// further reading:
// https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/error