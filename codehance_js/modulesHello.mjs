const ID = 57;

function helloWorld() {
  return 'Hello world!';
}

const viewId = (id) => {
  if (id !== NaN) {
    return `Your ID is ${id * 5 + 1000}`;
  } else {
    return 'You ID was not found';
  }
}

// export is used to extract code. So it can be imported into other files.
export { ID, helloWorld, viewId };

// further reading:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules