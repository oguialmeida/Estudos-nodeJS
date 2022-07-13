const express = require("express");
const app = express();
/*cria-se uma constante em vez de uma variável, pois assim a modificação da
variável não é possivel. */
app.get("/", function(req, res) { //criando rota
    res.send("Bem vindo ao projeto X!");
});

app.get("/sobre", function(req, res) {
    res.send("bla bla bla descrição");
});

app.get("/form/:nome/:cargo", function(req, res) { //criando parâmetros para serem preenchidos
    res.send("<h1> Nome: " + req.params.nome + "</h1>" + "<h1> Cargo: " + req.params.cargo + "</h1>");
}); //mostra um parametro requerido junto a uma tag html

app.listen(8081, function() { //essa função sempre tem que ser a última(é uma função de call back)
    console.log("Servidor On!!!")
});