const fs = require("fs");

// Read file from input
const data = fs.readFileSync(__filename);

console.log("File data is", data);

// THIS WILL BE EXECUTED AT END
console.log("Test");
