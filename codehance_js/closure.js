// Closure

// Global scope
let number = 20;

function multiplication() {
  return number * 4;
}

console.log(multiplication());

// Local scope
let name = 'sean';

/* Only a variable defined within the function can be 
used within the function but not outside of it (globally). */
function getName() {
  let name = 'Jordan';
  return name;
}

console.log(name);

// function scope
function urlBuilder(scheme) {
  return function (domain) {
    return function (path) {
      return `${scheme}://${domain}/${path}`;
    };
  };
}

console.log(urlBuilder('https')('codehance.com')('courses'));

// further reading:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
