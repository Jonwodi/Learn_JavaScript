// String and character codes
// -------------------------------------------------------------------

// the some() function is an another higher order function. It takes a test function and tells you whether that function returns a boolean value of true for any of the items in a array
const ages = [3, 10, 18, 20]; // a variable that contains a array of number values

function checkAdult(age) {
  // a to check if any number values in the array variable called ages are over 18
  return age > 18;
}

console.log(ages.some(checkAdult)); // returns a boolean value of true, if there is any number value within variable ages that is greater than the number value of 18

// -------------------------------------------------------------------

let emojis = "😂🤣";
console.log(emojis.length);
console.log(emojis.charCodeAt(0)); // the charCodeAt function in javascript gives you the code unit, not a full character code
console.log(emojis.codePointAt(0)); // the codePointAt function in javascript gives you the code unit, a full unicode character

// -------------------------------------------------------------------
// countBy() method
// findIndex()

function countBy(items, groupNmae) {
  let counts = [];
  for (let item of items) {
    let name = groupNmae(item);
    let known = counts.findIndex((c) => c.name == name);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

console.log(countBy([1, 3, 3, 3, 5], (n) => n > 2));
