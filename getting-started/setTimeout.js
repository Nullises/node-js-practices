const delayFunction = (delay) => {
  console.log("Hello after " + delay + " seconds");
};

// setTimeout(functionName, seconds * 1000, seconds to display)
setTimeout(delayFunction, 4000, 4);
setTimeout(delayFunction, 8000, 8);
