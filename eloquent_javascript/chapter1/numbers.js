// Number values
// -------------------------------------------------------------------

// whole numbers
let wholeNumberExample1 = 2;
console.log(wholeNumberExample1);

let wholeNumberExample2 = 20;
console.log(wholeNumberExample2);

// fractional numbers
let fractionalNumberExample1 = 2.5;
console.log(fractionalNumberExample1);

let fractionalNumberExample12 = 7.55;
console.log(fractionalNumberExample1);

// using exponent (e) on number values
let e1 = 2.998e8; // means 2.998 x 10 to the power of 8 = 299,800,000
console.log(e1);

let e2 = 25e5; // means 25 x 10 to the power of 5 = 250,00,00
console.log(e2);

// Arithmetic
// -------------------------------------------------------------------

// Addition 
let addition1 = 50 + 50; // The additon operator (+) is used for addition
console.log(addition1);

let addition2 = 5.50 + 50; // The additon operator (+) is used for addition
console.log(addition2);

// Multiplication
let multiplication1 = 5 * 5; // The multiplication operator (*) is used for multiplication
console.log(multiplication1);

let multiplication2 = 2.5 * 9.58; // The multiplication operator (*) is used for multiplication
console.log(multiplication2);

/* Multiplication has the same precedence as division but happens before addtion 
and subtraction in maths but you can change this by wrapping the addition or subtraction in parentheses */
const multiplicationFirst1 = 10 + 5 * 5; // multiplication happens before addition
console.log(multiplicationFirst1);

const multiplicationFirst2 = 10 - 5 * 5; // multiplication happens before subtraction
console.log(multiplicationFirst2);

const subtractionFirst1 = (10 - 5) * 5; // subtraction happens before multiplication
console.log(subtractionFirst1);

const additionFirst1 = (10 + 5) * 5; // addition happens before multiplication
console.log(additionFirst1);

// Subtraction
let subtraction1 = 10 - 5;
console.log(subtraction1); // The subtraction operator (-) is used for subtraction

let subtraction2 = 8.98 - 4.5; // The subtraction operator (-) is used for subtraction
console.log(subtraction2);

// Division 
let division1 = 10 / 5;
console.log(division1); // The division operator (/) is used for division

let division2 = 88.98 / 4.5; // The division operator (/) is used for division
console.log(division2);

/* Division has the same precedence as multiplication but happens before subtraction 
and addtion in maths but you can change this by wrapping the addition or subtraction in parentheses */
const divisionFirst1 = 30 - 5 / 5; // division happens before subtraction
console.log(divisionFirst1);

const divisionFirst2 = 30 + 5 / 5; // division happens before addition
console.log(divisionFirst2);

const subtractionFirst2 = (30 - 5) / 5; // subtraction happens before division
console.log(subtractionFirst2);

const additionFirst2 = (30 + 5) / 5; // addition happens before division
console.log(additionFirst2);

// When operators with the same precedence are next to each other they applied from left to right
// Multiplication, division and remainder have the same precedence
// Addition and subtraction have the same precedence
// When in doubt of precedence just use parentheses
let samePrecedence1 = 1 + 5 - 2; // addition happens before subtraction
samePrecedence1 = (1 + 5) - 2; // When in doubt
console.log(samePrecedence1);

let samePrecedence2 = 1 - 5 + 2; // subtraction happens before addition
samePrecedence2 = (1 - 5) + 2; // When in doubt
console.log(samePrecedence2);

let samePrecedence3 = 1 * 5 / 2; // multiplication happens before division
samePrecedence3 = (1 * 5) / 2; // When in doubt
console.log(samePrecedence3);

let samePrecedence4 = 1 / 5 * 2; // division happens before multiplication
samePrecedence4 = (1 / 5) * 2; // When in doubt
console.log(samePrecedence4);

let samePrecedence5 = 1 % 5 * 2; // remainder happens before multiplication
samePrecedence5 = (1 % 5) * 2; // When in doubt
console.log(samePrecedence5);

let samePrecedence6 = 1 * 5 % 2; // multiplication happens before multiplication
samePrecedence6 = (1 * 5) % 2; // When in doubt
console.log(samePrecedence6);

// Remainder
/* The remainder operator has the same precedence as multiplication and division 
and happens before addition and subtraction */
const remainder = 32 % 2; // The remainder or modulo operator (%) is used for finding the remainder of a number
console.log(remainder);

// Special numbers
// -------------------------------------------------------------------

// The special numbers in javascript are infinity, -infinity and NaN
const specialNumber1 = Infinity;
console.log(specialNumber1);

const stillInfinity = specialNumber1 - 1; // infinity minus any number will always return infinity as the result
console.log(stillInfinity);

const specialNumber2 = -Infinity;
console.log(specialNumber2);

const specialNumber3 = -NaN; // means Not a Number
console.log(specialNumber3);

// You will get NaN everytime as a result of the following operations:
const notANumber1 = 0 / 0; // returns NaN
console.log(notANumber1);

const notANumber2 = Infinity - Infinity; // returns NaN
console.log(notANumber2);
