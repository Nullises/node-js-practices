/**
 * WORKER THREADS:
 *
 * Worker Threads are useful to CPU-intensive tasks.
 * For I/O bound code like disk access and network calls
 * it's more efficient to use asynchronous API's (async/await)
 *
 */

const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require("worker_threads");

if (isMainThread) {
  console.log("Starting the main thread.");

  // we can define an output prefix for our worker
  const worker = new Worker(__filename, {
    workerData: {
      outputPrefix: "Received message",
      timeToWaste: 2000,
    },
  });

  // We subscribe an event emmiter called message
  // hence the worker communicates with the main thread
  worker.on("message", (msg) => {
    console.log(`Worker: ${msg}`);
  });
  worker.postMessage("Done with my work.");

  console.log("Still in the main thread.");
} else {
  // Subscribe the parentPort worker (worker thread)
  parentPort.on("message", (msg) => {
    console.log(`${workerData.outputPrefix}: ${msg}`);
  });

  // If we are not in the main thread, we post messages
  // to worker event emitter in the main thread
  parentPort.postMessage("Getting started");
  wasteTime(workerData.timeToWaste);
  parentPort.postMessage("In the middle");
  wasteTime(workerData.timeToWaste);
  parentPort.postMessage("All done");
}

// Function to emulate delay time
function wasteTime(delay) {
  const end = Date.now() + delay;
  while (Date.now() < end) {}
}
