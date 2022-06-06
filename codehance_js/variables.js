// The difference between the variable keywords var, const & let is their scope rules

/* var variables are variables that are assigned 
to values that can be changed once assigned. */
var name = 'Jordan';
name = 'Jay';


/* const (constant) variables are variables that are assigned 
to values that can't be changed once assigned.
Const variable should be in all capital letters e.g. const NUM = 4; */
const ID = 45;
// ID = 4; This would give an error as you can't change the value of a const variable


/* let variables are variables that are assigned 
to values that can be changed once assigned. */
let age = 25;
age = 18;

console.log(name);
console.log(ID);
console.log(age);

// further reading:
// https://developer.mozilla.org/en-US/docs/Glossary/Primitive
