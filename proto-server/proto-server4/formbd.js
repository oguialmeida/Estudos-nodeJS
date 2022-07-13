//COMO SE COMUNICAR COM O BANCO DE DADOS
const Sequelize = require('sequelize') //usando a biblioteca de comunicação com o bd
const sequelize = new Sequelize('sistemadecadastro', 'user', 'senha', { //passando parâmetros requediros pelo sequelize
    host: "localhost",
    dialect: 'mysql'
})

const Postagem = sequelize.define('postagens', {

})

sequelize.authenticate().then(function() {
        console.log("Conectado com sucesso!")
    }).catch(function(erro) {
        console.log("Falha ao se conectar: " + erro)
    }) //verifica se foi possivel se conectar com sucesso com o banco