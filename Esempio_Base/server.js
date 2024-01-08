let http = require("http")

http.createServer((req, res) => {
    res.write("Ciao io sono un server");
    res.end();
}).listen("3000")