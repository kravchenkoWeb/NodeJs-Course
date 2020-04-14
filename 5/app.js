const http = require('http');
const path = require("path");
const express = require('express');
const bodyParser = require('body-parser');
const admin = require("./routes/adminRoutes");
const shop = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', admin);
app.use(shop);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

const server = http.createServer(app);

server.listen(3000);