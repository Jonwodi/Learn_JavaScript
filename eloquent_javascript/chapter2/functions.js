// Functions
// A function is a piece of program wrapped in value. This type of value can be applied in order to run the wrapped program
// -------------------------------------------------------------------

// executing a function is called invoking, calling or applying a function
// a function call starts with variable name of the function followed by parentheses e.g. names();
// arguements can be passed into the function call parentheses e.g. name("John", "Jones");
// values given to functions are called arguements

// -------------------------------------------------------------------

// The prompt function is used in the browser to display a dialog box for user input
// an example of how the prompt function could be used:
// prompt("enter name");

// -------------------------------------------------------------------

// the console.log function
let number = 21;
console.log(number); // console.log is a function used to output values. In this case it will output the value assigned to the variable number.

// When using modern web browsers, you can view the output of the console.log function in javascript console by using F12 on your keyboard or COMMAND-OPTION-I on a mac keyboard

// -------------------------------------------------------------------

// the Math.max function
let maximum = Math.max(1,10,100,1000); // the Math.max function takes any amount of number arguements and returns the largest number
console.log(maximum);

// -------------------------------------------------------------------

// the Math.min function
let minimum = Math.min(1,10,100,1000); // the Math.min function takes any amount of number arguements and returns the smallest number
console.log(minimum);

// the Number function
let string2Number = Number("51"); // The Number function converts a value to a number.
console.log(string2Number); // returns 51 as a number value

// the String function
let number2String = String(300); // The String function converts a value to a string
console.log(number2String); // returns 300 as a string value

// the Boolean function
let string2Boolean = Boolean("true"); // The Boolean function converts a value to a boolean
console.log(string2Boolean); // returns true as a boolean value
