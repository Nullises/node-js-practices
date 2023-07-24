setTimeout(() => process.exit(), 2000);

// Will finish the process, after 2 seconds
process.on("exit", () => {
  console.log("Will output in the exit, see you later!");
});

console.log("init program");
