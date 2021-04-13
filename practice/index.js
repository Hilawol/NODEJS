// Load HTTP module
const http = require("http");
const url = require("url");
const users = require('./users.json');

const port = 8001;

const getById = (id) => users.find(u => u.id === parseInt(id));
const getByCapsule = (num) => users.filter(u => u.caspule === parseInt(num));

// Create HTTP server
const server = http.createServer((req, res) => {

  const q = url.parse(req.url, true).query;

  if (req.method === "GET") {
    if (req.url.includes("user")) {
      if (q.id) {
        res.write(JSON.stringify(getById(q.id)));
      }
      else if (q.capsule) {
        res.write(JSON.stringify(getByCapsule(q.capsule)));
      }
    }
    else {
      res.write("Something is wrong");
    }
  }
  // Send the response body 
  res.end();
})

// Prints a log once the server starts listening
server.listen(port, () => {
  console.log("server run at port" + port);
})