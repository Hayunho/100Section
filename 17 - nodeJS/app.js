const express = require("express");

const app = express();

app.get("/currenttime", function (req, res) {
  res.send("<h1>" + new Date().toISOString() + "</h1>");
}); // localhost:3000/currenttime;

app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>");
}); // localhost:3000/

app.listen(3000);

// const http = require("http");

// function handleRequest(request, response) {
//   // localhost:3000/currenttime
//   if (request.url === "/currenttime") {
//     response.statusCode = 200; // 200->success, 404->not found ...
//     response.end("<h1>" + new Date().toISOString() + "</h1>");
//   } else if (request.url === "/") {
//     //localhost:3000
//     response.statusCode = 200;
//     response.end("<h1>Hello World!</h1>");
//   }
// }

// const server = http.createServer(handleRequest);

// server.listen(3000);

// amazon.com -> Send a request to Amazon's server
// amazon.com:80
// 80: Http port number
// 443: more security port number
// 3000: develop port number
