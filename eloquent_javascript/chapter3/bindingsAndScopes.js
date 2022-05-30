// Bindings (Variables) and scopes
// -------------------------------------------------------------------

// each variable has a scope, which is part of the program which the variable is visible too
// For variables that defined outside a function or block the scope is the whole program. These variables are known as global scope variables.
// For variables that are defined inside a function, a function's parameters or block the scope is that function or block. So, these variables can only be referenced by the function or block they were declared in. These variables are known as local scope variables.

// -------------------------------------------------------------------

/* For variables that are in a local scope. If multipe variables
have th same variable name new instances of that variable 
will be created. Therefore, meaning that they won't overide
each other because they are only visible to their specific
block or function.*/

// -------------------------------------------------------------------

let x = 20; // x is a global variable, so can be used in and out of the function or block
x = 10;

if (x == 20) {
  let y = 100; // The variables y and z are only local or visible to the if block
  let z = 80;
  console.log(x + y + z);
} else {
  let y = 100; // The variables y and z needed to be defined again in order to be used in the else block because they are only local or visible to the else block. They can't be referenced by the if block.
  let z = 80;
  console.log(x + y + z);
}

// console.log(x + y + z) returns a ReferenceError that y and z are not defined because they are visble in the local scope or visible in the if or else block.

// -------------------------------------------------------------------

// If 2 variables have the same variable name but one is global and the other is local. The local variable will overide the global one and only reference the one inside its block.

let greeting = "Good afternoon";
function hello(greeting) {
  // greeting is both a local and global variable. So the greeting variable defined in the function block will be used for that function.
  return greeting;
}

console.log(greeting);
console.log(hello("Good morning"));

// -------------------------------------------------------------------

// nested scope  or lexical scoping
const partyInvite = function (name) {
  // The variable name can be used in the function paymentCheck because it is global to that function and any other function nested inside of the partyInvite function.
  const paymentCheck = function (guests, money) {
    let canAfford = guests * money; // The variables canAfford, guests and money are local to the paymentCheck function so they can only be used in this function and other blocks or functions nested below it but they can't be used by functions or blocks that are nested above it.
    return `${name} can afford to pay for ${guests} guests because he/she has $${canAfford}.`;
  };
  console.log(paymentCheck(5, 50));
};
console.log(partyInvite("John"));

// -------------------------------------------------------------------

// declaration notation
console.log(`James said,`, language()); // function langauage is being called before it is defined

// functions that start with the function keyword before the function variable name can be called before the function is defined
function language() {
  // function keyword before function variable name
  return `'I love coding with python'`;
}
