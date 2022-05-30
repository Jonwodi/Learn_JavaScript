// objects
// Objects are mutable
// Values of the type object are arbitrary collections of properties
// -------------------------------------------------------------------

let data = {
  name: "John",
  age: 36,
  city: "London",
  hobbies: ["reading", "jogging", "art"],
  job: "front end developer",
  income: "£75,000 per year",
  "javaScript Libary": "React JS",
}; // Objects are list of propeties, seperated by commas that are wrapped in braces ({}). Each property has a name followed by a colom (:) and a value. Properties whose names aren't valid variable names or valid number have to be quoted.

console.log(data.empty); // Returns a value of undefined because the property empty dosen't exist. Trying to access properties that haven't been defined in an object will give you an empty value of undefined.
console.log(data.age); // returns the value of the property age of the object variable data which is the number value 36
console.log(data.job); // returns the value of the property job of the object variable data which is the string value "front end developer"
console.log(data["javaScript Libary"]); // returns the value of the property "javaScript Libary" of the object variable data which is the string value "React JS"
console.log(data); // returns the object variable data with all its properties and values

// -------------------------------------------------------------------

// Updating property values or adding new properties
data.age = 25; // changes/updates the value that is assigned to the property age of the object variable data to a  new number value of 25.
console.log(data.age); // returns the new value of the property age of the object variable data which is the number value 25

data.language = "TypeScript"; // adds a new property name called language which holds a string value to the object variable data
console.log(data.language); // returns the value of the property language of the object variable data

// -------------------------------------------------------------------

// Deleting properties from a object
delete data.income; // the delete operator or method is used to delete the property income from object variable data
console.log(data.income); // returns undefined because the property income was deleted from the object variable data. So it no longer exits in the program

// -------------------------------------------------------------------

console.log("name" in data); // Checks to see if the property name is in the object variable data. It returns a boolean value.
console.log("income" in data); // returns boolean value false because the property income was deleted from the variable data using the delete operator or method

// -------------------------------------------------------------------

// Find an object property keys or names
console.log(Object.keys(data)); // Object.keys() method is used to return the key properties of an object

// -------------------------------------------------------------------

// Copying all properties from one object to another
let database = Object.assign(data); // Object.assign() method is used to copy all properties of an object into another object
console.log(database); // returns the object variable database with all its properties and values

database.name = "James"; // changes or updates the value that is assinged to the property name in the object database variable to a new string value
console.log(database.name); // returns the value of the property name of the object variable database which is the string value James

database.age = 27; // changes or updates the value that is assinged to the property name in the object database variable to a new number value
console.log(database.age); // returns the value of the property age of the object variable database which is the number value 27

// -------------------------------------------------------------------

// object data types
let numberList = [1, 3, 5, 7, 9, 11, 13]; // a array is a list values betwween square brackets, seperated by commas
console.log(typeof numberList); // returns object because arrays are a type of object that is specialised for storing sequences of things. The variable numberList is a array which is an object data type

console.log(typeof database); // returns object because the variable database holds a object data type

// -------------------------------------------------------------------

// Destructing a object
// Trying to destructure null and undefined will alaways give a error
let { aName, age } = { aName: "James", age: 34 };
console.log(aName);
console.log(age);
