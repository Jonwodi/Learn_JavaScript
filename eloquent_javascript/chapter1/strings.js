// String (text) values
// -------------------------------------------------------------------

/* In javascript you single quotes, double quotes and back ticks to denote 
string values so as long as the quotes or tick at the start of the string
match the the end of the string */
let string1 = `This is a string value`; // string denoted with back ticks
console.log(string1);

let string2 = 'This is a string value'; // string denoted with single quotes
console.log(string2);

let string3 = "This is a string value"; // string denoted with double quotes
console.log(string3);

// New lines in strings
// -------------------------------------------------------------------

let newlineString1 = `New lines can be created using only strings denoted 
with back ticks this way`; // strings denoted with back ticks can be used to create strings that contain newlines
console.log(newlineString1);

/* To use new lines in strings denoted single quotes or double quotes. You
need to use a backslash (\) followed by a letter n */
let newlineString2 = 'New lines can be created using strings denoted with single quotes\nbackslash followed by the letter n this way'; // newlines can be created in strings denoted with single quotes using \n
console.log(newlineString2);

let newlineString3 = "New lines can be created using strings denoted with double quotes\nbackslash followed by the letter n this way"; // newlines can be created in strings denoted with double quotes using \n
console.log(newlineString3);

// Adding tabs in strings
// -------------------------------------------------------------------

/* To add tabs to strings denoted single quotes, double quotes or back ticks. You
need to use a backslash (\) followed by a letter t */
let tabInString1 = '\tTo add a tab to strings denoted with single quotes you have to use backslash followed by the letter t, this way'; // tabs can be added in strings denoted with single quotes using \t
console.log(tabInString1);

let tabInString2 = "\tTo add a tab to strings denoted with double quotes you have to use backslash followed by the letter t, this way"; // tabs can be added in strings denoted with double quotes using \t
console.log(tabInString2);

let tabInString3 = `\tTo add a tab to strings denoted with back ticks you have to use backslash followed by the letter t, this way`; // tabs can be added in strings denoted with back ticks using \t
console.log(tabInString3);

// Make backslash be part of string value
// -------------------------------------------------------------------

let stringWithBackslash = 'To have backslash in strings actaully just be a backslash. You have to have 2 consecutive backslashs like this \\'; // having 2 consecutive backslashs in strings will collapse them together resulting in 1 backslash as part of the string value
console.log(stringWithBackslash);

// Concatenating (glueing) strings together
// -------------------------------------------------------------------

// The addtion (+) operator can be used to concatenate strings together
let glueStringsTogether = "con" + 'cat' + `e` + "nate"; // Using the addtion operator between strings glues them together to make one string value
console.log(glueStringsTogether);

// Template liberals
// -------------------------------------------------------------------

// Backtick-quoted strings usally called template liberals can embed other values using ${}
// When something is written inside the template literal (${}) its result is computed and converted into a string
let templateLiberal1 = 'James';
let templateLiberal2 = 100 % 3;
let stringWithTemplateLiberal = `My name is ${templateLiberal1} and I'm age ${34 - 7}. I choose the number ${templateLiberal2}`; // a string denoted with back ticks that uses ${} to embed values
console.log(stringWithTemplateLiberal);