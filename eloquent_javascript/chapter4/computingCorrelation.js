// Computing correlation
// -------------------------------------------------------------------

// phi coefficient is used to workout whether there is correlation betwwen values
/* correlation values range from -1 to 1. 1 means postive strong correlation,
0 means no correlation and -1 means strong negative correlation */

// -------------------------------------------------------------------

let table1 = [1, 80, 4, 57]; // A two by two table can be represented with a four element array like the variable below called table1

// -------------------------------------------------------------------

// A function to workout phi coefficient for a 2 x 2 (2 columns & 2 rows) table
function phi(table) {
  return (
    (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt(
      // The Math.sqrt function/method is used to find the square root of a number
      (table[2] + table[3]) *
        (table[0] + table[1]) *
        (table[1] + table[3]) *
        (table[0] + table[2])
    )
  );
}

console.log(phi([76, 9, 4, 1])); // phi function is being called with an array arguement

console.log(Math.sqrt(144)); // returns 12 because that is the square root of 144

// -------------------------------------------------------------------

// arrays have and includes method thats check whether a value exists in array
let array = ["pizza", "burger", "pizza", "burger", "salad", "chips", "pizaa"];

if (array.includes("pizza") == true) {
  console.log(true);
} else {
  console.log("array dosen't contain pizza");
}

let numberCheck = [20, 30, 40, 50]; // a variable that contains any array value

// The includes method checks whether a value exists in an array
console.log(numberCheck.includes(50)); // returns a boolean value of true because the number value 50 is in the array varibale called numberCheck
console.log(numberCheck.includes(55)); // returns a boolean value of false because the number value 55 is not in the array varibale called numberCheck
