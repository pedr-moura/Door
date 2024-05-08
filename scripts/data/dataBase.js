//banco de dados simulado para consulta

let produtos = ['produto1', 'produto2', 'produto3'];
let fornecedor = ['fornecedor1', 'fornecedor2', 'fornecedor3'];

//npm install mysql

const bd = require('mysql')

const conexao = bd.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'teste'
})

conexao.connect((err) => {
    if (err) throw err
    console.log('Conectado ao banco de dados');
})

conexao.query('SELECT * FROM fornecedores', (error, results, fields) => {
    if (error) throw error;
    console.log('Resultado da consulta: ', results);
})

connection.end();