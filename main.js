var http = require("http");
var fs = require("fs");

http.createServer(function (request, response) {
  fs.readFile("126A5674.mov", function (error, data) {
    if (error) {
      response.writeHead(500, { "Content-Type": "text/plain" });
      response.end("Error loading the video");
    } else {
      response.writeHead(200, { "Content-Type": "video/mp4" });
      response.end();
    }

  });
}).listen(8001);

console.log('http://127.0.0.1:8001/');

