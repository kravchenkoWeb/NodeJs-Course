const http = require("http");
const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/users", (req, res, next) => {
    res.sendFile(path.join(__dirname, "public", "users.html"));
});

app.use((req, res, next) => {
    res.status(404).write("<h1>Page not found!</h1>");
});

app.listen(3000);