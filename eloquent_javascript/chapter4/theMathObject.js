// The Math object
// -------------------------------------------------------------------

// Math.PI returns the number value of pi
const pi = Math.PI;
console.log(pi);

// -------------------------------------------------------------------

// Math.random() returns a random decimal number between 0 and 1
const randomNumber = Math.random();
console.log(randomNumber);

// -------------------------------------------------------------------

// The Math object can be used to do trigonometry
/* The Math object contains Math.cos (cosine), Math.sin (sine), Math.tan (tangent).
As well as their inverse methods such as Math.acos, Math.asin and Math.atan */
let randomPointCircle = (radius) => {
  let angle = Math.random() * 2 * Math.PI;
  return { x: radius * Math.cos(angle), y: radius * Math.sin(angle) };
};

console.log(randomPointCircle(5));

// -------------------------------------------------------------------

// Math.floor() is used to create a random whole number
// Math.floor() takes the result of Math.random() and rounds it to the nearest whole number
// Multiplying a random number by 10 gives you a number >= 0 but below 10
let randomWholeNumber = Math.floor(Math.random() * 10); // method used to generate a single digit random whole number
console.log(randomWholeNumber);

let randomWholeNumber2 = Math.floor(Math.random() * 100); // method used to generate a double digit random whole number
console.log(randomWholeNumber2);

// -------------------------------------------------------------------

// Math.ceil() is used round up a decimal number to the nearest whole number
let roundToWholeNumber = Math.ceil(2.98989);
console.log(roundToWholeNumber);

// -------------------------------------------------------------------

// Math.round() is used round a decimal number to the nearsest whole number
let roundUp = Math.round(2.98989);
console.log(roundUp);

// -------------------------------------------------------------------

// Math.abs() is a method used to return a absolute number value meaning it removes - from a negative number but keeps postive numbers the same
let absoluteNumber1 = Math.abs(4);
console.log(absoluteNumber1);

let absoluteNumber2 = Math.abs(-4);
console.log(absoluteNumber2);
