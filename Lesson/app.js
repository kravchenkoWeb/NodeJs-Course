const http = require("http");

const reqListener = (req, res, next) => {
    console.log(req);
    // Shut down server
    // process.exit();
};

const server = http.createServer(reqListener);

server.listen(3000);