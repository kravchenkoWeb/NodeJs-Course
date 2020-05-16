const http = require('http');
const path = require("path");
const express = require('express');
const bodyParser = require('body-parser');

const adminData = require("./routes/adminRoutes");
const shop = require("./routes/shop");

const notFoundController = require("./controllers/404");

const app = express();

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shop);

app.use(notFoundController.notFound);

const server = http.createServer(app);

server.listen(3000);