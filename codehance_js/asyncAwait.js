// Async Await
function start() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log('Start'));
    }, 1000);
  });
}

function middle() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log('Middle'));
    }, 2000)
  });
}

function end() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log('End'));
    }, 1000)
  });
}

async function runAsync() {
  await start();
  await middle();
  await end();
}
runAsync();

(async () => {
  await start();
  await middle();
  await end();
})();

(async () => {
  try {
    await start();
    await middle();
    await end();
  } catch (err) {
    console.log(err);
  }
})();

// further reading
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await