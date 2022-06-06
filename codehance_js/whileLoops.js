// while loop
let a = 1;
let b = 10;

while (a <= b) {
  console.log(a)
  a++;
}

// do while loop
let x = 0;
let y = 5;

do {
  console.log(x);
  x++;
} while (x <= y);

// infinite while loop
// while (true) {
//   console.log('hello');
// }


// while loop with break statement
let n1 = 0;
let n2 = 15;

while (n1 <= n2) {
  if (n1 = 8) {
    break;
  }
  n1++;
}

console.log(n1);

// further reading:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break
