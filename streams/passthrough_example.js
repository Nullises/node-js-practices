/**
 *  The readable stream contains read functions and the writable streams 
 * contain only the write function. There are scenarios where you need to use 
 * streams that support both. That is when the following readable-writable 
 * streams come into the picture. The Transform stream is the most common one.

PassThrough
Transform
Duplex

 */

const fs = require("fs");

// PassThrough: Readable-Writable Stream
const { PassThrough } = require("stream");

const pass = new PassThrough();

const readableStream = fs.createReadStream("./files/file2.txt");
const writableStream = fs.createWriteStream("./files/out2.txt");

pass.pipe(readableStream).pipe(writableStream);
