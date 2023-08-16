const { Writable } = require("stream");
const fs = require("fs");

// Writable Constructor example
const myWritableStream = (data) => {
  return new Writable({
    write(chunk, enc, next) {
      data.push(chunk);
      next();
    },
  });
};

const data = [];
const writable = myWritableStream(data);

writable.on("finish", () => {
  console.log("Writing Done!!!", data.toString());
});

writable.write("This is the stream data 1\n");
writable.write("This is the stream data 2\n");
writable.write("This is the stream data 3\n");

const writableStream = fs.createWriteStream("./files/out_constructor.txt");

// Pass a fs.writableStream to our previous writable Stream
writableStream.pipe(writable);

writable.end("Done!!!!");
