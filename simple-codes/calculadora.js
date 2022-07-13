var oper
var valor
var valor1
var readlineSync = require('readline-sync');
oper = readlineSync.question("Qual operacao deseja realizar? (+) (-) (*) (/)? : \n");
valor = parseFloat(readlineSync.question("Insira o primeiro numero: \n"));
valor1 = parseFloat(readlineSync.question("Insira o segundo numero: \n"));

function doOperation(operador, valor1, valor2) {
    if (operador == "+") {
        return valor1 + valor2;
    } else if (operador == "-") {
        return valor1 - valor2;
    } else if (operador == "*") {
        return valor1 * valor2;
    } else if (operador == "/") {
        return valor1 / valor2;
    } else {
        throw new Error('Operação invalida');
    }
}

console.log('O resultado é', doOperation(oper, valor, valor1))

/*OBS: Para conseguir executar o código foi necessario digitar no terminal
"npm install --save readline-sync", para baixar as dependências do node*/