// Methods
// -------------------------------------------------------------------

// Methods are properties that hold function values

// -------------------------------------------------------------------

let dog = {}; // a variable that contains an empty object

dog.hungry = function (food) {
  // hungry is a property key of the object variable dog. It holds a property value that is a function value
  console.log(`The dog wants to eat ${food}`);
};

// arguements passed into the variable dog as function property values for the property key hungry
dog.hungry("chicken");
dog.hungry("beef");

// -------------------------------------------------------------------

function type(car) {
  // type is a property key of the object variables bmw and mercedes. It holds a property value that is a function value
  console.log(`This ${this.brand} is a ${car} car`);
}

let bmw = { brand: "BMW", type }; // a object variable that holds a property string value and a method property value
bmw.type("automatic"); // arguement for the function type

let mercedes = { brand: "Mercedes", type }; // a object variable that holds a property string value and a method property value
mercedes.type("manual"); // arguement for the function type

// Kingsley help with git submodules and also django registartion that automatically logs a user in, countBy array method
