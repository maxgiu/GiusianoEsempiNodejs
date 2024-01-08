let http = require('http');
let fs = require("fs");
//create a server object:
http.createServer((req, res)=> {
  res.setHeader("content-type", "text/html ")//serve per far capire al server che linguaggio stiamo usando
  let contenuto=fs.readFileSync("./html/index.html")
  
  res.end(contenuto); //end the response
}).listen("3000"); //the server object listens on port 3000