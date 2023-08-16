const fs = require("fs");
const { pipeline } = require("stream");

const readableStream = fs.createReadStream("./files/file1.txt");

const writableStream = fs.createWriteStream("./files/pipelineout.txt");

// PIPELINE: READABLE-WRITABLE STREAM
/**
 * A module method to pipe between streams and generators forwarding errors
 * and properly cleaning up and provide a callback when the pipeline is
 * complete. Here is an example.
 */
// RECEIVES readableStream (file that I want to read)
// THROWS writableStream (file that I can to write readableStream data)
pipeline(readableStream, writableStream, (err) => {
  if (err) {
    console.error("Pipeline failed.", err);
  } else {
    console.log("Pipeline succeeded.");
  }
});
