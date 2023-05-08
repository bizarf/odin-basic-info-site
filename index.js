const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    // if the request is "/" send the user to index.html
    if (req.url === "/") {
        fs.readFile("./index.html", (err, data) => {
            if (err) {
                console.error(err);
                res.end();
            } else {
                res.write(data);
                res.end();
            }
        });
    }

    // sends the page based on the request url. if error then send a 404 page. I don't know if this is correct, but it seems to work without any issue.
    fs.readFile(`.${req.url}`, (err, data) => {
        if (err) {
            fs.readFile("./404.html", (err, data) => {
                res.write(data);
                res.end();
            });
        } else {
            res.write(data);
            res.end();
        }
    });
}).listen(8080);
