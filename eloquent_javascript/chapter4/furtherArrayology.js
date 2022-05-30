// Further Arrayology
// -------------------------------------------------------------------

let todoList = []; // a variable that contains a empty array

// array push method
function addListTasks(task) {
  return todoList.push(task); // push method is used to add the arguement task to the end of the array that is assigned to the variable todoList
}
// function calls that add a task to the variable todoList
console.log(addListTasks("read"));
console.log(addListTasks("exercise"));
console.log(addListTasks("shopping"));
console.log(addListTasks("work"));

// -------------------------------------------------------------------

// array shift method
let getFirstTask = () => {
  return todoList.shift(); // the shift method removes the first item from the array that is assigned to the variable todoList
};
console.log(getFirstTask()); // getFirstTask function call

// -------------------------------------------------------------------

// array unshift method
let importantTask = (task) => {
  return todoList.unshift(task); // unshift adds a item to the start of the array that is assigned to the variable todoList
};
console.log(importantTask("meeting")); // function call adds arguement to the start of the array that is assigned to the variable todoList

// -------------------------------------------------------------------

console.log(todoList); // returns a array of string values that are assigned to the variable called todoList

// -------------------------------------------------------------------

// array indexOf method
console.log(todoList.indexOf("shopping")); // indexOf method is used to find the index position of a item in an array starting from the start of the array to the end. If item in the array is not found then an index position of -1 is returned.
console.log(todoList.indexOf("java")); // returns a index postion of -1 because the string value java is not present in the array that is assigned to the variable called todoList

// -------------------------------------------------------------------

// array LastindexOf method
console.log(todoList.lastIndexOf("exercise")); // lastIndexOf method is used to find the index position of a item in an array starting from the end of the array to the start

// -------------------------------------------------------------------

// array slice method
console.log(todoList.slice(1, 3)); // the slice method is used to extract items from the todoList starting from the index 1 and ending with position index 3
console.log(todoList.slice(1)); // extracts all items in array starting from index 1 to the very end of the array
console.log(todoList.slice()); // extracts all data from todoList since no index positions are specified. Also, is a way to copy all items in a array.

// -------------------------------------------------------------------

// array concat method
let people = ["John", "James", "Jess", "Steph"]; // a variable that contains a array of string values
let addPeople = ["Gaby", "Billy", "Tom"]; // a variable that contains a array of string values
console.log(people.concat(addPeople)); // concat method is used to glue (add) to arrays together similar to how the concatenation is used to glue strings together. The concat method glues the arrays of the variables people and addPeople to make a new single array of string values
