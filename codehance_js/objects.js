// Creating a object
let dataStorage = {
  Name: 'Jay',
  Age: 24,
  Height: '175cm'
};

console.log(dataStorage);

// Retrieve value of an objetc
console.log(dataStorage.Name);
console.log(dataStorage.Age);
console.log(dataStorage['Height']);

// Change value of an object
dataStorage.Age = 30;
console.log(dataStorage.Age);

dataStorage['Name'] = 'Sean';
console.log(dataStorage.Name);

// Add new value to an object
dataStorage.Weight = '70kg';
dataStorage['Sport'] = 'Basketball';
dataStorage['Job'] = 'Basketball coach';
dataStorage.School = 'University of Worcester';
dataStorage.stats = {Championships: 7,
Awards: 10};

// delete a property from an object 
delete dataStorage.Job;
delete dataStorage['School'];

// Check key exists 
console.log(dataStorage.hasOwnProperty('Name'));
console.log(dataStorage.hasOwnProperty('Job'));
console.log(dataStorage.hasOwnProperty('Sport'));

console.log(dataStorage);

// further reading:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
