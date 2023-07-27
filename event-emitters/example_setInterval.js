const EventEmitter = require("events");
const myEmitter = new EventEmitter();
let counter = 0;

// Subscribing events each 2 seconds
const eventsIntervals = setInterval(() => {
  myEmitter.on("TEST_EVENT", () => {
    console.log(`TEST_EVENT ha corrido ${counter + 1} veces`);
    counter += 1;
  });

  // A maximum of 15 events
  if (counter === 15) {
    // Clear all intervals
    clearInterval(eventsIntervals);
    // Remove all listeners
    myEmitter.removeAllListeners();
    console.log("Fin del programa");
  }

  myEmitter.emit("TEST_EVENT");
}, 2000);
