const express = require("express");
const app = express();
/*cria-se uma constante em vez de uma variável, pois assim a modificação da
variável não é possivel. */
app.get("/", function(req, res) { //criando rota
    res.sendFile(__dirname + "/index.html");
});
//pega o diretorio da pasta e soma com a localição da pasta dentro do diretório
app.get("/sobre", function(req, res) {
    res.sendFile(__dirname + "/sobre.html");
});

app.listen(8081, function() { //essa função sempre tem que ser a última(é uma função de call back)
    console.log("Servidor On!!!")
});