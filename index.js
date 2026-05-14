const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(path.join(__dirname, "index.html")).pipe(res);
  } else if (req.url === "/faaa.mp3") {
    res.writeHead(200, { "Content-Type": "audio/mpeg" });
    fs.createReadStream(path.join(__dirname, "faaa.mp3")).pipe(res);
  }
});

server.listen(3000, () =>
  console.log("🔊 FAAAAA server running on http://localhost:3000"),
);
