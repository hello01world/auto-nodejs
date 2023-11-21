var app = require("../app");
var http = require("http");

// HTTP服务器
const httpServer = http.createServer(app.callback());
httpServer.on("error", onError);
httpServer.on("listening", onListening);
const httpPort = normalizePort(80 || process.env.PORT);
let port = httpPort;
httpServer.listen(httpPort, function () {
  console.log(
    "Server running at: " + "http://localhost" + ":" + httpPort + "/"
  );
});

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  const addr = this.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  // console.log('Listening on ' + bind);
}

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
