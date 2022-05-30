// Automatic type conversion
// -------------------------------------------------------------------

// type coercion
let typeCoercion = null * 0; // In javascript if a multiplication operator is used with the empty value null and a number or itself. Then javascript will convert null to a number value of 0. Then will perform the multiplication arithmetic calculation.
console.log(typeCoercion); // returns a number value 0

let typeCoercion2 = "51" - 1; // In javascript if a subtraction operator is used with a string number and a number. Javascript converts the string number into a number. Then performs the subtraction arithmetic calculation.
console.log(typeCoercion2); // returns a number value 50

let typeCoercion3 = '7' + 2; // In javascript if a addition operator is used with a string and a number. Javascript converts the number into a string and then peforms string concatenation.
console.log(typeCoercion3); // returns a string value 72

let typeCoercion4 = 'five' * 2; // In javascript if a multiplication operator is used with the empty value undefined, a boolean or a string multiplied by a number or itself. Then javascript will convert the empty value undefined, boolean or a string to a special number value of NaN (Not a Number). Then will perform the multiplication arithmetic calculation. Further arithmetic operations results into NaN
console.log(typeCoercion4); // returns a empty value NaN

let typeCoercion5 = false == 0;
console.log(typeCoercion5); // returns a boolean value true

let typeCoercion6 = null == undefined; // In javascript if a equal to operator is used with the empty values null and/or undefined on both sides of the equal to operator. Then this will always result into the boolean value of true.
console.log(typeCoercion6); // returns a boolean value true


// short circuiting of logical operators
// -------------------------------------------------------------------

/* The number 0, NaN (Not a Number) and a empty string value ('') 
count are equal to false when dealing withh booleans and 
logical operators. Whilst, anything else
is equal to true when dealing with booleans and
logical operators. Therefore when using 
a logical or (||) operator between two values that are not
boolean data types if the value on the left side is equal to true. 
Then the value on the left hand side will be returned. 
On the other hand, if the value on
the left is equal to false. Then the value on the right of the logical 
or operator will be returned.*/

let circuit = NaN || 'HELLO';
console.log(circuit); // Returns 'HELLO' because the value on the left (NaN) is equal to false. Therefore the value on the right of the logical or operator is returned.

let circuit2 = (20 || 0);
console.log(circuit2); // Returns 20 because the value on the left (20) is equal to true. Therefore the value on the left of the logical or operator is returned.

// -------------------------------------------------------------------

/* When using 
a logical and (&&) operator between two values that are not
boolean data types if the value on the left side is equal to false. 
Then the value on the left hand side will be returned. 
On the other hand, if the value on
the left is equal to true. Then the value on the right of the logical 
and operator will be returned.*/

let circuit3 = NaN && 'HELLO';
console.log(circuit3); // Returns 'NaN' because the value on the left (NaN) is equal to false. Therefore the value on the left of the logical and operator is returned.

let circuit4 = 20 && 0;
console.log(circuit4); // Returns 0 because the value on the left (20) is equal to true. Therefore the value on the right of the logical and operator is returned.

// -------------------------------------------------------------------

/* When using 
a logical or (||) operator between two values that are not
boolean data types if the values on both sides of the logical or
operator before the conditional or tenary operator (?) are equal to a sum value of false.
So, false || false = false.
Then the second value on the right hand side 
of the conditional or tenary operator (?) will be returned. 
On the other hand, if both values before the conditional or tenary operator (?)
with a logical or operator between both values is 
equal to the sum value of true. So, true || true = true or true || false = true
Then the first value after the conditional or tenary operator (?) 
operator will be returned.*/

let circuit5 = 0 || 0 ? 1 : 2;
console.log(circuit5); // returns 2 because the sum value of the values on both sides of the logical or operator before the conditional or tenary operator (?) is equal to false. 0 is false, so false || false = false.

let circuit6 = NaN || 20 ? 1 : 2;
console.log(circuit6); // returns 1 because the sum value of the values on both sides of the logical or operator before the conditional or tenary operator (?) is equal to true. NaN is false and 20 is true, so false || true = true.

// -------------------------------------------------------------------

/* When using 
a logical and (&&) operator between two values that are not
boolean data types if the values on both sides of the logical and
operator before the conditional or tenary operator (?) are equal to a sum value of false.
So, false && false = false or true && false = false.
Then the second value on the right hand side 
of the conditional or tenary operator (?) will be returned. 
On the other hand, if both values before the conditional or tenary operator (?)
with a logical and operator between both values is 
equal to the sum value of true. So, true && true = true.
Then the first value after the conditional or tenary operator (?) 
operator will be returned.*/

let circuit7 = '' && 20 ? 20 : 'hello';
console.log(circuit7); // returns 20 because the sum value of the values on both sides of the logical and operator before the conditional or tenary operator (?) is equal to false. The empty string is false and 20 is true, so false && true = false. Therefore, the second value after the conditional or tenary operator (?) is returned.

let circuit8 = 2 && 4 ? 'John' : 'Day';
console.log(circuit8); // returns John because the sum value of the values on both sides of the logical and operator before the conditional or tenary operator (?) is equal to true. 2 and 4 is true, so true && true = true. Therefore, the first value after the conditional or tenary operator (?) is returned.

