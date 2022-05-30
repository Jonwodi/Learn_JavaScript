// JSON
// -------------------------------------------------------------------

// Data that needs to be sent to another computer can be serialized using JSON, which means the data will be converted into a flat description
// JSON is a popular serialization format is stands for JavaScript Object Notation
/* JSON looks similar Javascript arrays and objects with the difference being that all property names 
need to be surrounded by double quotes, and only simple data expressions are allowed. 
So, no function calls, variables, or anything that involes actual computation. Also, comments
aren't allowed in JSON. */

// -------------------------------------------------------------------

// JSON.stringify() converts a javascript object into a JSON data structure or JSON encoded string
let string = JSON.stringify({ name: "Bill", isAMan: true });
console.log(string);

// -------------------------------------------------------------------

// JSON.parse() converts a JSON encoded string into a javscript object
let json = JSON.parse('{"name": "John", "isAMan": true} ');
console.log(json);

let json2 = JSON.parse(string);
console.log(json2);
