// modules
/* module files need to end with mjs instead of just js. 
In order for code to run without any errors */

// import is used to code get access to code in file that has code exported
import { ID, helloWorld, viewId } from './modulesHello.mjs';


console.log(ID);
console.log(helloWorld());
console.log(viewId(67));

// further reading:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
