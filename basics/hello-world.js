const http = require("http");

const requestListener = (req, res) => {
  res.end("Hello World");
};

const server = http.createServer();
server.on("request", requestListener);

server.listen(3000, () => {
  console.log("Server is running...");
});
