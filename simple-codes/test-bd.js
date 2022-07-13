//COMO SE COMUNICAR COM O BANCO DE DADOS
const Sequelize = require('sequelize') //usando a biblioteca de comunicação com o bd
const sequelize = new Sequelize('sistemadecadastro', 'user', 'senha', { //passando parâmetros requediros pelo sequelize
    host: "localhost",
    dialect: 'mysql'
})

const Postagem = sequelize.define('postagens', { //cria uma tabela dentro do bd
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

//Postagem.sync({ force: true }); //não é mais necessário rodar essa parte pois a tabela já foi criada 

/*Postagem.create({
    titulo: "um titulo aleatorio",  //insere dados nos campos da tabela
    conteudo: "catapimbas"
})*/

const Usuario = sequelize.define('usuarios', {

    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }

})

//Usuario.sync({ force: true })

/*Usuario.create({
    nome: "Iguinho",
    sobrenome: "Bariloche",
    idade: 45,
    email: "josiasdastrevas@gmail.com"
})*/