const EventEmitter = require("events");
const myEmitter = new EventEmitter();
let counter = 0;

// Starts immediate
setImmediate(() => {
  myEmitter.emit("TEST_EVENT");
});

// Subscribing event 3 times
myEmitter.on("TEST_EVENT", () => {
  console.log(`TEST_EVENT ha corrido ${counter + 1} veces`);
  counter += 1;
});

myEmitter.on("TEST_EVENT", () => {
  console.log(`TEST_EVENT ha corrido ${counter + 1} veces`);
  counter += 1;
});

myEmitter.on("TEST_EVENT", () => {
  console.log(`TEST_EVENT ha corrido ${counter + 1} veces`);
  counter += 1;
});
