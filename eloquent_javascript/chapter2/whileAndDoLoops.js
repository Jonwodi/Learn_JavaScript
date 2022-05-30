// While and do loops
// -------------------------------------------------------------------

// while loop
let number = 0;
// the while loop starts with the while keyword followed by the condition wrapped within parentheses
while (number <= 12) { // As long as the while loop condition (number <= 12) has boolean value that is equal to true. The loop will continue repeating
  console.log(number);
  number = number + 2; // Adds 2 to the current value of the the variable number for each loop iteration. This line of code is used to update and/or change the current state of the number value of the variable number.
}

// a while loop that calculates and shows the value of 2 to the tenth power
let result = 1;
let counter = 0;
// the while loop starts with the while keyword followed by the condition wrapped within parentheses
while (counter < 10) { // As long as the while loop condition (result < 10) has boolean value that is equal to true. The loop will continue repeating
  result = result * 2; // Multiplies the current value of the the variable result for each loop iteration by 2. This line of code is used to update and/or change the current state of the number value of the variable result.
  counter = counter + 1; // Adds 1 to the current value of the the variable counter for each loop iteration. This line of code is used to update and/or change the current state of the number value of the variable counter.
}

console.log(result);

// -------------------------------------------------------------------

// do loop
// let yourName;

// do {
//   yourName = prompt("What's your name"); 
// } while (!yourName);
// console.log(yourName);
