const fs = require("fs");

// Writable: Writable Stream. Creates a file in the files folder
const writableStream = fs.createWriteStream("./files/out.txt");

// Write text in my stream
writableStream.write("This is dummy text1!!");
writableStream.write("\n");
writableStream.write("This is dummy text2!!");
writableStream.write("\n");
writableStream.write("This is dummy text3!!");
writableStream.write("\n");

// end (Writable)
writableStream.end("Done!!");
