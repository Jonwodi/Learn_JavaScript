// Growing functions
// -------------------------------------------------------------------

function printFarmInventory(cows, chickens) {
  // function has 2 parameters
  let maxStringPadding = 3; // variable holds a number value 3
  let cowString = String(cows); // the value of the variable cowString will be converted into a string value
  while (cowString.length < maxStringPadding) {
    cowString = "0" + cowString; // the string "0" is added infront of the string value of cowString until the number of string characters is equal to 3
  }
  console.log(`${cowString} Cows`); // returns the final value of the variable cowString in another string

  let chickenString = String(chickens);
  while (chickenString.length < maxStringPadding) {
    chickenString = "0" + chickenString;
  }
  console.log(`${chickenString} Chickens`);
}

printFarmInventory(8, 11);
