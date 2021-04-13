const http = require('http');
const fs = require('fs');
const path = require('path');

const users = require('./users.json');

const port = 8000;
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.wav': 'audio/wav',
  '.mp4': 'video/mp4',
  '.woff': 'application/font-woff',
  '.ttf': 'application/font-ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'application/font-otf',
  '.wasm': 'application/wasm',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {

  let filePath = req.url;
  if (req.method === "GET") {
    if (filePath === ("/raw-html")) {
      res.writeHead(200);
      res.write('<h1>Welcome</h1>');
      res.end();
    }
    else if (filePath === ('/users')) {
      res.writeHead(200);
      res.write(JSON.stringify(users));
      res.end();
    }
    else {
      if (filePath === ('/')) {
        filePath = './public/index.html';
      }
      else {
        filePath = 'public' + req.url;
      }

      const extname = String(path.extname(filePath)).toLowerCase();
      let contentType = mimeTypes[extname];

      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.write("File not found");
          res.end();
        }
        else {
          res.writeHead(200, { 'Content-Type': contentType });
          res.write(data);
          res.end();
        }
      });
    }
  } else {
    res.writeHead(400, { 'Content-Type': 'text/html' });
    res.write("Bad Request");
    res.end();
  }
})

server.listen(port, () => {
  console.log("Listening on port 8000");
});