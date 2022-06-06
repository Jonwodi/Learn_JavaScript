function myName(name) {
  return `My name is ${name}`;
}

console.log(myName('Jordan'));

function testScores(score, subject, name) {
  if (score > 80) {
    return `${name} got a A grade in ${subject}.`;
  } else if (score > 50) {
    return `${name} got a C grade in ${subject}.`;
  } else {
    return `${name} failed the ${subject} test.`;
  }
}

console.log(testScores(85, 'Maths', 'Jordan'));
console.log(testScores(60, 'English', 'Sean'));
console.log(testScores(50, 'Biology', 'James'));

function multiplication(a, b) {
  return a * b;
}

console.log(multiplication(7,9));

// self ivoking function
(function () {
  console.log("I can run myself!!!");
})();

// further reading:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions