const http = require("http");
const path = require("path");
const express = require("express");
const bodyParser = require('body-parser');
const router = express.Router();

const app = express();

app.set("view engine", "pug");
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

const users= [];

app.post("/new-user", (req, res, next) => {
    users.push({user: req.body.username});
    res.redirect('/');
});

app.get("/users-list", (req, res, next) => {
    res.render("users", {userlist: users, pageTitle: 'Users'});
});

app.get("/", (req, res, next) => {
    res.render("main", {pageTitle: 'Home'});
});

const server = http.createServer(app);

server.listen(3000);