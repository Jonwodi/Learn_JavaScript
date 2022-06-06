// Transforming with map
// -------------------------------------------------------------------

// the map function/method is array method that transforms a array by applying a function to all of its items and then building a new array from the returned values

// -------------------------------------------------------------------

const items = [
  { name: "Eggs", price: 10 },
  { name: "Chicken", price: 25 },
  { name: "Milk", price: 2.5 },
  { name: "Beef", price: 50 },
  { name: "Pasta", price: 2.5 },
]; // a variable that contains a array of objects

const itemNames = items.map((item) => item.name); // the map() function returns all object propery values of the property key called name for the variable called items and places these property values into a new array

console.log(itemNames); // logs the result of variable called itemNames into the console
