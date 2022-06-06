// Understanding sync
// Sync runs from top to bottom 
console.log('Start');
console.log('Middle');
console.log('End');


// Async runs like Sync but will also factor time and 
// can skip and return to pending executions
console.log('Begin');

setTimeout(() => {
  console.log('wait for 3 seconds.');
}, 3000)

console.log('Finish');

// further reading
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing
