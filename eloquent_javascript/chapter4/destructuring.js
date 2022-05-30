// Destructuring
// -------------------------------------------------------------------

// Trying to destructure null and undefined will always give you a error

// -------------------------------------------------------------------

// A better way to write the phi function
// function uses destrurcturing
function phi2([n00, n01, n10, n11]) {
  return (
    (n11 * n00 - n10 * n01) /
    Math.sqrt(
      (n10 + n11) * // The Math.sqrt function is used to find the square root of a number
        (n00 + n01) *
        (n01 + n11) *
        (n00 + n10)
    )
  );
}

console.log(phi2([76, 9, 4, 1]));

// -------------------------------------------------------------------

// destructuring a object
let { name } = { name: "John", age: 69 };
console.log(name);
