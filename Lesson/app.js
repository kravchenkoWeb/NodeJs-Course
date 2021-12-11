const http = require("http");

const reqListener = (req, res, next) => {
    console.log(req);
};

const server = http.createServer(reqListener);

server.listen(3000);