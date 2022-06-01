// Filtering Arrays
// -------------------------------------------------------------------

// the filter function is used to filter items in array that meet a specific condition

let names = ["John", "James", "Jimmy", "John"]; // a variable that contains a array of string values

const identicalNames = names.filter((name) => {
  return name == "John";
}); // this function filters or returns all occurrences of the string value name John that is in the variable names which contains a array of string values

console.log(identicalNames); // logs all occurences of the string John into the console

const items = [
  { name: "Eggs", price: 10 },
  { name: "Chicken", price: 25 },
  { name: "Milk", price: 2.5 },
  { name: "Beef", price: 50 },
  { name: "Pasta", price: 2.5 },
]; // a variable that contains a array of objects

const filteredItems = items.filter((item) => item.price < 25); // this function filters or returns all objects in the variable called items that have a price that is less than the number value 25

console.log(filteredItems); // logs all occurences of the objects in the variable called items that have a property price value that is less than the number value 25
