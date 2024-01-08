const express = require('express');
const app = express();
const port = 3000;
let gioco = [];

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.post("/valuta", (req, res) => {
    let dati = {
        nome: req.body.nome,
        voto: req.body.voto
    };
    let esiste = gioco.find(g => g.nome === dati.nome);
    console.log(esiste)
    if (esiste) {
        console.log("dati.voto " + dati.voto)
        console.log("esiste.voto " + esiste.voto)
        if (dati.voto > esiste.voto) {
            console.log("dati.voto " + dati.voto)
            gioco.splice(gioco.indexOf(esiste), 1); // Utilizza splice per rimuovere l'elemento
            gioco.push(dati);
        }
    } else {
        gioco.push(dati);
    }
    res.render("index", { variabile: gioco });
})

app.listen(port, () => {});
