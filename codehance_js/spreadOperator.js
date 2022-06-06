// spread operator
// spread within a array
/* spread just like the rest operator starts with 3 dots 
and can be called anything. The only difference is that it can be placed in any position */
let oneToSix = [1, 2, 3, 4, 5, 6];
let oneToTen = [...oneToSix, 7, 8, 9, 10];
let oneToTenReverse = [7, 8, 9, 10, ...oneToSix];
console.log(oneToTen);
console.log(oneToTenReverse);


// spread within an object
let address = {
  street: '26 High Street',
  postalCode: 'SE14'
};

address = { ...address, city: 'London' }
console.log(address)

// further reading:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
