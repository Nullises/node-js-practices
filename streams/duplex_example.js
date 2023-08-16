const { Duplex } = require("stream");

const data = [];

// DUPLEX: READABLE - WRITABLE STREAM
const myDuplex = new Duplex({
  // DUPLEX DOES WRITE AND READ PROCESS SIMULTANEOUSLY
  write(chunk, enc, next) {
    data.push(chunk);
    next();
  },

  read() {
    if (data.length === 0) {
      this.push(null);
    } else {
      this.push(data.shift());
    }
  },
});

// data (Readable)
myDuplex.on("data", (data) => {
  console.log("Received Data ", data.toString());
});

// end (Writable)
myDuplex.on("end", () => {
  console.log("End of file reached!!!");
});

// finish (Writable)
myDuplex.on("finish", () => {
  console.log("Writing Done!!!");
});

myDuplex.write("This is the stream data 1\n");
myDuplex.write("This is the stream data 2\n");
myDuplex.write("This is the stream data 3\n");

myDuplex.end("Done!!!!");
