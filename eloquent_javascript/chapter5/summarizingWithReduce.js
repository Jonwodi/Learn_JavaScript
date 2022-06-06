// Summarizing with reduce
// -------------------------------------------------------------------

// the reduce function/method is a higher order function used by arrays to compute a single result by repeatedly taking all elements in the array and combing it with the current result

// -------------------------------------------------------------------

const items = [
  { name: "Eggs", price: 10 },
  { name: "Chicken", price: 25 },
  { name: "Milk", price: 2.5 },
  { name: "Beef", price: 50 },
  { name: "Pasta", price: 2.5 },
]; // a variable that contains a array of objects

const totalPrice = items.reduce((currentPrice, item) => {
  return item.price + currentPrice;
}, 0);

console.log(totalPrice);

const totalAmount = items.reduce(
  (currentPrice, item) => currentPrice + item.price,
  0
);

console.log(totalAmount);
