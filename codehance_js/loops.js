for (let i = 0; i < 5; i++) {
  console.log(i);
}

let names = ['Jay', 'Day', 'May'];

for (name in names) {
  console.log(`${names[name]}`);
}

let food = ['sandwich', 'bread', 'fish', 'steak']

for (let i=0; i < food.length; i++) {
  console.log(`I love ${food[i]}`)
}

// loop within a loop
for (let i=0; i < food.length; i++) {
  for (let j=0; j < food.length; j++) {
    console.log(`I love ${food[i]} with ${food[j]}`)
  }
}

// further reading:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
