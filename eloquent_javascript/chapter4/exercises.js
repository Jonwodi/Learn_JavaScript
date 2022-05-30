// Exercises
// -------------------------------------------------------------------

// The Sum of a Range
// function that returns a range of number from start to the end
let range = (start, end) => {
  numberList = [];
  for (let number = start; number <= end; number++) {
    numberList.push(number);
  }
  return numberList;
};

console.log(range(1, 10)); // function call with start and end arguements for a number range

// function to work out the sum of a range of numbers
let sum = (numbers) => {
  let total = 0;
  for (let n = 0; n < numbers.length; n++) {
    total += numbers[n];
  }
  return total;
};

console.log(sum(range(1, 10)));
console.log(sum([10, 20, 30, 40, 50]));
// -------------------------------------------------------------------

// Reversing an Array
// function to reverse order of items in a array
let reverseArray = (array) => {
  let newArray = [];
  for (let item of array) {
    newArray.unshift(item); // This line of code inserts a item at the start of the array variable newArray. For every item in the function arguement (array). This therefore reverses the the order of items in the orginal array (function call arguement).
  }
  return newArray;
};

console.log(reverseArray(["A", "B", "C", "D"]));

// function to reverse order of items in a array
let reverseArrayInPlace = (array) => {
  let newArray = [];
  for (let item of array) {
    newArray.unshift(item); // This line of code inserts a item at the start of the array variable newArray. For every item in the function arguement (array). This therefore reverses the the order of items in the orginal array (function call arguement).
  }
  return newArray;
};

console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));

// -------------------------------------------------------------------

// A List

// let arrayToList = (value) => {
//   list = {
//     value: value[0],
//     rest: { value: value[1], rest: { value: value[2] } },
//   };
//   return list;
// };
// console.log(arrayToList([1, 2, 3]));

function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--)
    list = { value: array[i], rest: list };
  return list;
}
console.log(arrayToList([1, 2, 3]));

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) array.push(node.value);
  return array;
}
console.log(listToArray(arrayToList([1, 2, 3])));

function prepend(value, list) {
  return { value: value, rest: list };
}
console.log(prepend(1, prepend(2, null)));

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}
console.log(nth(arrayToList([1, 2, 3]), 0));

// -------------------------------------------------------------------

// Deep Comparison

function deepEqual(a, b) {
  if (a === b) return true;

  if (a == null || typeof a != "object" || b == null || typeof b != "object")
    return false;

  let propsInA = 0,
    propsInB = 0;

  for (let prop in a) propsInA += 1;

  for (let prop in b) {
    propsInB += 1;
    if (!(prop in a) || !deepEqual(a[prop], b[prop])) return false;
  }
  return propsInA == propsInB;
}

let n1 = { language: "Python" };
let n2 = { language: "Python" };
let n3 = { language: "Java" };

console.log(deepEqual(n1, n2));
console.log(deepEqual(n1, n3));
