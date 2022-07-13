var http = require('http'); //como é uma arquivo que já faz parte do node, não é necessário digitar um diretório

http.createServer(function(req, res) { //essa função abre um servidor
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Projeto X'); //"res" serve para mandar alguma resposta para o usuário
}).listen(8080); //listen informa em qual porta de rede se deseja abrir o servidor

console.log("Servidor aberto!")