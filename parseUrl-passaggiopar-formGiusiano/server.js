let http = require('http');
var querystring = require('url');//parso in automatico il parametro ricevuto
http.createServer((req, res)=> {
    let mioUrl=querystring.parse(req.url,true);
    switch (mioUrl.query.cognome) {
        case "Giusiano" :
          res.end("Massimo")
          break;
        case "Rossi" :
          res.end("Paolo")
          break;
        case "Bianchi" :
          res.end("Luca")
          break;
        default:
          res.end("Il cognome inserito non appartiene ai tuoi amici.")
          break;
    }
    
}).listen("3000");