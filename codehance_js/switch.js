const INPUT = 'age';

switch (INPUT) {
  case 'name':
    console.log('Jordan');
    break;
  case 'age':
    console.log(24);
    break;
  default:
    console.log('No info given');
}

// console.log(new Date().getDay())

switch (new Date().getDay()) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
     console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
}

// further reading:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
