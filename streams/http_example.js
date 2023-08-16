/**
 * STREAMS
 * 
Streams are an asynchronous way of reading and writing files and 
other data in NodeJS. There are other APIs in NodeJS such as 
child_process, fs, http, net, and process which exposes streams. 
We almost never use streams directly and other APIs use streams 
in the background. 
There are six constructors that are exposed by this Stream 
module

Stream
Readable
Writable
Duplex
Transform
PassThrough

When you are using streams, the streams API emits events 
that signify certain actions such as data is available,
 no data available, end of the stream, etc. 
 These are commonly emitted events. 
 The Readable stream emits data and end events,
  The Writable stream emits finish event when there is no data to write left.

data
end
finish
close
error

 */

// HTTP
const http = require("http");
// `req` is an http.IncomingMessage, which is a readable stream.
// `res` is an http.ServerResponse, which is a writable stream.

const server = http.createServer((req, res) => {
  let body = "";

  req.setEncoding("utf-8");

  // Readable: Emit data
  req.on("data", (chunk) => {
    // Add data emitted to our body variable
    body += chunk;
  });

  // Writable: End
  req.on("end", () => {
    try {
      const data = JSON.parse(body + "\n");
      // Write back something interesting to the user:
      res.write(data);
      res.end();
    } catch (er) {
      // uh oh! bad json!
      res.statusCode = 400;
      return res.end(`error: ${er.message}`);
    }
  });
});

server.listen(3003);

// Run on terminal
//curl localhost:3003 -d "\"foo\""
