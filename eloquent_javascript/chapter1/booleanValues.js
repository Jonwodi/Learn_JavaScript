// Boolean values
// The boolean values are true and false
// -------------------------------------------------------------------
// comaprison 
let isTrue = 5 > 2; // > is the greater than operator
console.log(isTrue); // returns the boolean value true

let isFalse = 10 < 5; // < is the less than operator
console.log(isFalse); // returns the boolean value false

let stringOrdering1 = "abc" < "ABC"; // In javascript uppercase letters are less than lowercase letters 
console.log(stringOrdering1);

let isTrue2 = 5 >= 2; // >= is the greater than or equal to operator
console.log(isTrue2); // returns the boolean value true

let isFalse2 = 10 <= 5; // <= is the less than or equal to operator
console.log(isFalse2); // returns the boolean value false

let isTheSame = "name" == "name"; // == is the equal to operator
console.log(isTheSame); // returns the boolean value true

let notTheSame = "name" != "name"; // != is the not equal to operator
console.log(notTheSame); // returns the boolean value false

let notEqualToSelf = NaN == NaN; // NaN (Not a Number) is the only value in javascript that is not equal to itself
console.log(notEqualToSelf); // returns the boolean value false

let compare = false === 0; // === is the strict equal to operator and it used to check whether a value is precisely equal to another value.
console.log(compare); // returns the boolean value false

let compare2 = false !== 0; // === is the strict not equal to operator and it used to check whether a value is precisely not equal to another value.
console.log(compare2); // returns the boolean value true

// Logical operators
// -------------------------------------------------------------------
// logical and operator
let boolean = true && false; // && is the logical and operator. If either value on the left or right of the logical and operator is false. Then the result will always be false
console.log(boolean); // returns the boolean value false

let comparison = 10 >= 5 && 15 > 10; // && is the logical and operator. If both values on the left and right of the logical and operator is true. Then the result will always be true
console.log(comparison); // returns the boolean value true

// logical or operator
let boolean2 = true || false; // || is the logical or operator. If either value on the left or right of the logical or operator is true. Then the result will always be true
console.log(boolean2); // returns the boolean value true

let comparison2 = 2.5 >= 5 || 5 > 10; // || is the logical or operator. If both values on the left and right of the logical or operator is false. Then the result will always be false
console.log(comparison2); // returns the boolean value false

// logical not operator
let isFalse3 = !true; // ! is the logical not operator.
console.log(isFalse3); // returns the boolean value false

let isTrue3 = !false; // ! is the logical not operator.
console.log(isTrue3); // returns the boolean value true

// conditional (ternary) operator
// -------------------------------------------------------------------
/* When the value on the left hand side of the conditional operator is true. 
Then value in the middle (the value after the condition operator just before the colon) is picked. 
When the value on the left of hand side the conditional operator is false. 
Then value at the end of the statement (the value after the condition operator and after the colon)
 is picked. */
// -------------------------------------------------------------------
let pickNumber1 = 10 > 5 ? "John" : "James"; // ? is the condtional (ternary) operator
console.log(pickNumber1); // returns the string value John

let pickNumber2 = 10 > 50 ? "John" : "James"; // ? is the condtional (ternary) operator
console.log(pickNumber2); // returns the string value James