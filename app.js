const express = require("express");
const app = express();
const fs = require("fs");

// static loads files based on dir provided
app.use(express.static("./"));

// if user goes to a page that doesn't exist (404) then use fs to write 404.html
app.use((req, res, next) => {
    res.status(404);
    fs.readFile("./404.html", (err, data) => {
        res.write(data);
        res.end();
    });
});

app.listen(8000, () => {
    console.log(`Server has opened on port 3000`);
});
