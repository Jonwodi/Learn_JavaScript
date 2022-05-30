// Strings and their properties
// -------------------------------------------------------------------

// data types such as strings, numbers and booeleans aren't objects. So new properties can't be set unto them. These type of data types are also immutable.

// -------------------------------------------------------------------

let location = "Manchester"; // a variable that contains a string value

// slicing a string
console.log(location.slice(3)); // extracts all string characters in the variable called location starting from index 3 to the very end of the string
console.log(location.slice()); // extracts all string characters in the variable called location. Bascially, makes a exact copy of string that is assigned to the variable called location
console.log(location.slice(0, 5)); // the slice method is used to extract string characters from the variable called location starting from the index 0 and ending with position index 5

// -------------------------------------------------------------------

// string indexOf method
console.log(location.indexOf("chester")); // unlike a array where you can find the index position of 1 item, you can find the index position of multiple string characters which grouped together and treated as 1 one index.

let location2 = "Man ches ter";
console.log(location2.indexOf("s"));

// -------------------------------------------------------------------

// string lastIndexOf method
console.log(location.lastIndexOf("e")); // lastIndexOf method is used to find the index position of a string character or a group of string characters in an string starting from the end of the string to the start

// -------------------------------------------------------------------

// string trim method
let word = "\tatmostphere\n  ";
console.log(word.trim()); // the trim method removes whitespaces such as tabs, newlines and empty spaces at the start and end of a string

// -------------------------------------------------------------------

// padStart method
// padStart takes the desired length as the first arguement and the padding charcter as the second character and adds the padding character to the start of string value until the desired string length (first arguement) is reached
// the String() function converts a number value to a string value
console.log(String(71).padStart(5, "2")); // returns the string value 22271
console.log(String(1).padStart(6, "sixty")); // returns the string value sixty1

// -------------------------------------------------------------------

// string split method
// splits a string into array of string items
let names = "John James Jess Jimmy Jordan";
console.log(names.split("")); // returns a array of single string characters
console.log(names.split(" ")); // returns a array of single string words

// -------------------------------------------------------------------

// string join method
// the join method joins string array items into a single string text
let people = ["Billy", "Bailey", "Sam"];
console.log(people.join(""));
console.log(people.join(" "));
console.log(people.join(", "));

// -------------------------------------------------------------------

// string repeat method
// a string method that glues multiple copies of a string together
let phrase = "Ilove"; // a variable that contains a string value
console.log(phrase.repeat(5)); // returns the string value IloveIloveIloveIloveIlove

// -------------------------------------------------------------------

// Accesing a string character by index position
let name = "Johnny"; // a variable that contains a string value
console.log(name[2]); // returns the string character that is at the index position of 2 in string that is assigned to the varibale called name
console.log(name[5]); // returns the string character that is at the index position of 5 in string that is assigned to the varibale called name
