// properties
// -------------------------------------------------------------------

// Almost all javascript values have properties. The execeptions are empty values such as null and undefined. If you try to access a property on one of these empty values, you'll get an error.

/* 
e.g.
let error = null.length;
console.log(error); 
returns an error message, such as:
TypeError: Cannot read properties of null (reading 'length')
on the console log
*/

// -------------------------------------------------------------------

let numberList = [1, 3, 5, 7, 9, 11, 13]; // a array is a list values betwween square brackets, seperated by commas

// Properties of a variable can accessed using a dot (.) or a square bracket ([])
console.log(numberList.length); // The length property returns the number of items in the variable numberList. Length property accessed using dot.
console.log(numberList[0]); // Returns the number value 1 because this is the first item in the array. Index property accesed using square bracket.
