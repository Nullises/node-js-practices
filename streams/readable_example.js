// File system native module of Node.jss
const fs = require("fs");

// Readable stream
const readableStream = fs.createReadStream("./files/file1.txt");

// data (Readable)
readableStream.on("data", (data) => {
  console.log("Received Data ", data.toString());
});

// end (Writable)
readableStream.on("end", () => {
  console.log("End of file reached!!!");
});
