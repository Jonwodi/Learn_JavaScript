// Exercises
// -------------------------------------------------------------------

// exercise: Looping a Triangle
for (string = "#"; string.length <= 7; string = string +'#') { // string.length is the max length of the string. In other words, how many string characters are in the variable string.
  console.log(string);
}

// -------------------------------------------------------------------

// exercise: FizzBuzz
for (let number = 1; number <= 100; number++) {
  if (number % 3 == 0 && number % 5 == 0) { // condition 1: if the value of the variable number is dividable by 3 and 5
    console.log("FizzBuzz"); // if condition 1 is equal to a boolean value of true then return the string value FizzBuzz
  } else if (number % 3 == 0) { // condition 2: if the value of the variable number is dividable by 3
    console.log("Fizz");  // if condition 2 is equal to a boolean value of true then return the string value Fizz
  } else if (number % 5 == 0 && number % 3 != 0) { // condition 3: if the value of the variable number is dividable by 3 but not dividable by 5
    console.log('Buzz'); // if condition 3 is equal to a boolean value of true then return the string value Buzz
  } else { // default condition
    console.log(number); // returns number value if default condition is equal to a boolean value of true
  }
}

// -------------------------------------------------------------------

// exercise: Chessboard

let size = 8; // this variable determines cheesboard grid width and height
let board = '';

for (let height = 0; height < size; height++) {
  for (let width = 0; width < size; width++) {
    if ((height + width) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += '\n'; // creates newline for each loop iteration of grid height
}

console.log(board);