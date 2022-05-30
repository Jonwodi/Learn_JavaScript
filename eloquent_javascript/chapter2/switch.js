// switch statements
// switch statemens can have as may cases as you want
/* The program will start executing at case that corresponds to the value (variable) given to switch. 
if no matching case is found then default is returned */
let formInput = 'date';

switch (formInput) {
  case 'name': // case returns string value Jordan if the variable formInput is assigned to the string value of name
    console.log('Jordan'); 
    break; // breaks if the case is equal to the value of formInput ('name')
  case 'date': // case returns new Date() if the variable formInput is assigned to the string value of date
    console.log(new Date());
    break;
  case 'age':
    console.log(24);
    break;
  default:
    console.log('Error! name and date is required'); // The default value that is returned if the variable formInput is not equal to one of the cases defined
    break;
}
