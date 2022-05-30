// Conditional execution
// -------------------------------------------------------------------

// conditonal execution is created with the if keyword in javascript
// conditonal execution is used anytime we want a specific code to be executed anytime a specific condition is met

// Number.isNaN function
let isNotANumber = Number.isNaN("hello"); // the Number.isNaN function returns a boolean value of true, only if the arguement given is NaN (Not a Number). The Number function returns NaN, if you give a string arguement that dosen't represent a valid number
console.log(isNotANumber);

// conditonal execution
let number = Number("51" + "6"); // string values are concatenated together and then converted into a number value using the Number function
// the if keyword is used to denote a conditonal execution
// the condition is written after the if key word and is wrapped within parentheses
// Statements or code to execute if condition is met is wrapped in braces ({}). Statements wrapped in braces are also refered to as a block.
if (!Number.isNaN(number)) { // !Number.isNaN(number) means unless number is NaN (Not a Number) then do this
  console.log('Your number is the square root of ' + number * number); // statements or code to run if condition is met
}

// a one line conditonal execution
if (2 * 2 == 4) console.log("It's true"); // Statement or code to run if condition is met isn't wrapped in braces because there is only one statement. If there's more than one statement then braces should be used.

// -------------------------------------------------------------------

// conditonal execution with else keyword
let number2 = Number("51" + "p"); // string values are concatenated together and then converted into a number value using the Number function
// the if keyword is used to denote a conditonal execution
// the condition is written after the if key word and is wrapped within parentheses
// Statements or code to execute if condition is met is wrapped in braces ({}). Statements wrapped in braces are also refered to as a block.
if (!Number.isNaN(number2)) { // !Number.isNaN(number) means unless number is NaN (Not a Number) then do this
  console.log('Your number is the square root of ' + number2 * number2); // statements or code to run if condition is met
} else { // the else key word is used to denote a alternative path if condition isn't met
  console.log(`Your number is equal to ${number2} (Not a Number)`); // statements or code to run if condition isn't met
}

// -------------------------------------------------------------------

// conditonal execution with a chain of multiple if/else pairs
let gamer = 'John';
let gamerScore = 25;
const gamePoints = 25;
// a conditonal execution with a chain of multiple if/else pairs is used if there are more than two paths to choose from
if (gamerScore >= gamePoints && gamerScore < 50) { // condition 1 
  console.log(`Congratulations ${gamer}. You made it to the next round.`); // statement or code is executed if condition 1 is met
} else if (gamerScore >= 50) { // Condition 2. The else if keyword is used to denote a different condition from the condition defined with the if keyword (condition 1).
  console.log(`Congratulations ${gamer}. You made it to the next round. And unlocked a new badge.`); // statement or code is executed if condition 2 is met
} else { // condition 1 or 2 is not met
  console.log(`You didn't score enough points. Try again ${gamer}.`); // statement or code is executed if condition 1 or 2 isn't met
}