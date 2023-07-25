const fs = require("fs");
const util = require("util");
// BAD PATTERN: Callbacks.
/**
 * Could cause call back from hell
 */
/*fs.readFile(__filename, function cb(err, data) {
  console.log("File data is", data);
});*/

// GOOD PATTERN: Async-await
// Promisifying the readFile
const readFile = util.promisify(fs.readFile);
// Async-Await function
async function main() {
  const data = await readFile(__filename);
  console.log("File data is: ", data);
}

main();
// THIS WILL BE EXECUTED AT THE BEGINNING
console.log("TEST");
