const express = require("express");
const app = express();

app.use("/users", (req, res, next) => {
    console.log("This is Users route!");
    res.send("<h1>Welcome to the Users Route!</h1>");
});

app.use('/', (req, res, next) => {
    console.log("This is default route!");
    res.send("<h1>Welcome to the default route!</h1>");
});


// app.use((req, res, next) => {
//     console.log("First Middleware");
//     next();
// });

// app.use((req, res, next) => {
//     console.log("Second middleware");
//     res.send("<p>Resovled(almost)</p>");
// });

app.listen(3000);