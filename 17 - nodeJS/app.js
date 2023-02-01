const http = require("http");

function handleRequest(request, response) {
  response.statusCode = 200;
  response.end("<h1>Hello World!</h1>");
}

const server = http.createServer(handleRequest);

server.listen(3000);

// amazon.com -> Send a request to Amazon's server
// amazon.com:80
// 80: Http port number
// 443: more security port number
// 3000: develop port number
