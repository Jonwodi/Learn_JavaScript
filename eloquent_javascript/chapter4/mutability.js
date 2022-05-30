// mutability
// -------------------------------------------------------------------

// The data types such as strings, numbers and booleans are immutable.
// Immutable means a data type can't be changed.

// -------------------------------------------------------------------

// The data types such as arrays and objects are mutable
// Mutable means that a data type can be changed

// -------------------------------------------------------------------

// object refernce point
// Both objects and arrays are considered both object data types in javascript
let object1 = { value: 10 }; // a variable that contains a object value

let object2 = { value: 10 }; // a variable that contains a object value

let object4 = { value: 10 }; // a variable that contains a object value

let object3 = object1; // the object variables object3 and object1 are pointing to the same object reference so changing/updating the properties of any one of these variables will update the other object variable accoordingly because they are pointing to the same object reference. In other words, they have the same identity.

object3.value = 20; // updates the property of both object variables object3 and object1 because both variables are pointing to the same object reference point

console.log(object1.value); // returns a number value of the property value for the object variable object1 which is the number 20 because object variable object3's property value was updated to hold a number value of 20. Which will also update the property of object variable object1 because both object variables object1 and object3 point to the same object reference
console.log(object2 == object4); // returns a boolean value of false becaue although both object variables object2 and object4 contain the same property keys and values. They don't point to the same object reference point. In other words, both variables live sepeerated lives.
console.log(object1 == object3); // returns a boolean value of true because both object variables object1 and object3 point to the same object reference point

const list = [1, 3, 6, 9]; // a variable that contains a array value
const list2 = list; // the array variables object3 and object1 are pointing to the same object reference so changing/updating the properties of any one of these variables will update the other array variable accoordingly because they are pointing to the same object reference. In other words, they have the same identity.
list[0] = 2; // updates the property of both object variables list and list2 at the index position of zero because both variables are pointing to the same object reference point
list2[3] = 100; // updates the property of both object variables list2 and list at the third index position because both variables are pointing to the same object reference point

console.log(list); // returns all properties of the constant object variable called list

// -------------------------------------------------------------------

// constant variables that hold object and array values
const constantObjectVariable = { info: 5 };

// constantObjectVariable = { name: "John" }; // Try to to change an constant variable that holds object and array data types to hold an new set of object and array data types won't work because constant variables will point to the same values for as long as the program exists

constantObjectVariable.data = 25; // new properties can be added in constant object/array variables
constantObjectVariable.info = 10; // property values of constant object/array variables can be updated/changed to point to new set of values

console.log(constantObjectVariable); // returns all properties of the constant object variable called constantObjectVariable

// -------------------------------------------------------------------

// function that appends a object data type to a array
let variable = []; // a variable that holds a empty array value

let addData = (data, values) => {
  // a arrow function that has 2 parameters
  variable.push({ data, values }); // object propery names that are added to the variable array called variable
};

addData("numbers", [1, 2, 3, 4]); // a function call that adds the two arguments as object property values to object property names data and values

console.log(variable); // returns a array that contains a object and all the properties of the object
