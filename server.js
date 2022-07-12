const express = require("express");
const serveStatic = require("serve-static");

var hostname = "localhost";
var port = 3001;

var app = express();

app.use(function (req, res, next) {
  if (req.method != "GET") {
    res.type(".html");
    var msg =
      "<html><body>This server only serves web pages with GET!</body></html>";
    res.end(msg);
  } else {
    next();
  }
});

app.use(serveStatic(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile("/index.html", { root: __dirname });
});

app.listen(port, hostname, function () {
  console.log(`Server hosted at http://${hostname}:${port}`);
});
