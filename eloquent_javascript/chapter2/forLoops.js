// For loops
// -------------------------------------------------------------------

// for loop
// in javascript the for loop is the slightly shorter and more comprehensive form of the while loop
// the parentheses after the for keyword must contain 2 semicolons
// the first semicolon intializes the loop by defining a variable or variables
// the second semicolon is the condition, it is used to determine whether the loop should could continue
// the final part of the for loop updates and/or changes the current state of variables defined at the start of the loop

// -------------------------------------------------------------------

/* The first part of the for loop before the first semicolon intializes the
for loop by defining a variable or variables. The second part of the for loop before
the second semicolon checks whether the loop should break or continue
by giving a condition e.g. 1 <= 10. The last part of the for loop updates the state of the variables defined 
before the first semicolon after every loop iteration. */
for (let number = 0; number <= 12; number = number + 2) {
  console.log(number);
}

// for loop that returns values of 2 to the power of 10
for (result = 1, counter = 0; counter < 10; counter = counter + 1) {
  result = result * 2
}
console.log(result);

// -------------------------------------------------------------------

// breaking out of a loop
// the break keyword is used to quit out of a loop, especially if loop has condition that is always equal to a boolean value of false
for (let value = 23; ; value = value + 1) { // the for loop's second semicolon colon dosen't have condition, so the loop with continue unless a break statement is applied or a condition is given
  if (value % 7 == 0) { // The remainder operator (%) is an easy way to test if a number is dividable by another number. If it is, the remainder of their division is equal to the number value of 0.
    console.log(value); // returns the first number within the for loop that is dividable by 7
    break; // Quits the for loop if the condition defined after if statement keyword (if) is equal to a boolean value of true. Without a break keyword this loop would be become a infinite loop because it dosen't have condition defined at the second semicolon.
  }
}

// for (let value2 = 23; ; value2 = value2 + 1) { // the for loop's second semicolon colon dosen't have condition, so the loop with continue unless a break statement is applied or a condition is given
//   if (value2 % 7 == 0) { // The remainder operator (%) is an easy way to test if a number is dividable by another number. If it is, the remainder of their division is equal to the number value of 0.
//     console.log(value2); // returns the all numbers within the for loop that is dividable by 7
//     continue; // The continue keyword continues looping if the condition defined after if statement keyword (if) is equal to a boolean value of true. It becomes an infinite loop.
//   }
// }

// -------------------------------------------------------------------

// Updating variables succinctly
for (let number2 = 0; number2 <= 12; number2 = number2 + 1) {  // updates current state of variable number2 by adding 1 for every loop iteration
  console.log(number2);
}

for (let number3 = 0; number3 <= 12; number3 += 1) { // updates current state of variable number3 by adding 1 for every loop iteration
  console.log(number3);
}

for (let number4 = 0; number4 <= 12; number4++) { // updates current state of variable number4 by adding 1 for every loop iteration
  console.log(number4);
}

for (let minus = 100; minus > 50; minus = minus - 5) { // updates current state of variable minus by substracting 5 for every loop iteration
  console.log(minus);
}


for (let minus2 = 100; minus2 > 50; minus2 -= 5) { // updates current state of variable minus2 by substracting 5 for every loop iteration
  console.log(minus2);
}

for (let start = 10; start >= 5; start--) { // updates current state of variable start by substracting 1 for every loop iteration
  console.log(start);
}

// -------------------------------------------------------------------

const people = [
  ['Jay', 21], 
  ['May', 5], 
  ['John', 35], 
  ['Sammy', 37],
  ['Jess', 20]
];

// for loop with the continue keyword used to skip something that meets a specific condition
for (let i = 0; i < people.length; i++) { // i++ updates the value of the variable i by 1 each time the for loop iterates
  if (people[i][1] < 21) {
    continue; // Using the keyword continue skips anyone in the list of people with number below 21 and returns people in the array with number equal to 21 or above
  }
  console.log(`${people[i][0]} is old enough to watch this movie.`);
}