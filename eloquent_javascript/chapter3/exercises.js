// Exercises
// -------------------------------------------------------------------

// Minimum
// -------------------------------------------------------------------
let min = (a, b) => {
  if (a > b) {
    return b;
  } else {
    return a;
  }
};

console.log(min(12, 20));

// Recursion
// -------------------------------------------------------------------

let isEven = (n) => {
  if (n == 0) {
    return true; // boolean value of true will be returned if the arguemnent of n is equal to 0 because 0 is an even number
  } else if (n == 1) {
    return false; // boolean value of false will be returned if the arguemnent of n is equal to 1 because 1 is an odd number
  } else if (n < 0) {
    return isEven(-n);
  } else {
    return isEven(n - 2); // calculates whether the value of n is a n even number
  }
};

console.log(isEven(50)); // returns a boolean value of true
console.log(isEven(75)); // returns a boolean value of false
console.log(isEven(-1)); // returns a boolean value of false

// -------------------------------------------------------------------

// Bean counting
