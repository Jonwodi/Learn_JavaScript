// Bindings (Variables)
// variables are used to catch and hold values
// -------------------------------------------------------------------

// The let keyword is used to define a variable. The world after the let keyword is the name of the variable. This is usally followed by = operator to assign a value to the variable followed by a semicolon to end the statement
let name = 'John'; // variable is called name and variable holds a string value
console.log(name); // returns value assigned to the variable name

// The const keyword is used to define a constant variable which points to the same value for as long as the program lives
const age = 13;
console.log(age);

// Variable names can be any word. Numbers can be part of a variable name but you can't start a variable name with numbers. Variable names can also contian dollar signs ($) and underscores (_) but no other punctuaution or special characters. Also, javascript keywords and reserved words can't be used as variable names.
// variable names can't contain spaces 
// variable names in javascript made of 2 or more words should use camelcase convention e.g. nameInput, numberCounterTracker etc
let catch22 = 'a dilemma'; // catch22 is a valid variable name
console.log(catch22); // returns value assigned to the variable catch22

let $money = "£30"; // $money is a valid variable name
console.log($money); // returns value assigned to the variable $money

let index_fund = 'S&P 500'; // index_fund is a valid variable name
console.log(index_fund); // returns value assigned to the variable index_fund

