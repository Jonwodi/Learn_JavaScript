// less than
console.log(1 < 5);

// less than or equal to
console.log(1 <= 5);
console.log(5 <= 5);

//  greater than
console.log(1 > 5);

//  greater than or equal to
console.log(5 >= 5);

// strict equal to
console.log(5 === 5);
console.log("5" === 5);

// equal to
console.log(5 == 5);
console.log("5" == 5);

// strict not equal to
console.log(5 !== 5);

// not equal to
console.log(5 != 5);

// boolean comparison
// true and false == false
console.log(true && true);
console.log(true && false);

// true or false == true
console.log(true || true);
console.log(true || false);

console.log(!true);
console.log(!false);

const num1 = 400;
const num2 = 300;
const num3 = 800;

if (num1 > num2 && num1 > num3) {
console.log("num1 is bigger then num2 and num3");
} else if (num2 > num1 && num2 > num3) {
console.log("num2 is bigger num1 and num3");
} else {
console.log("num3 is bigger then num1 and num2");
}

let name = 'Sean';
let age = 26;

if (name === 'Sean' || age === 24) {
  console.log(true);
} else {
  console.log(false);
}

// further reading:
// https://www.w3schools.com/js/js_comparisons.asp
