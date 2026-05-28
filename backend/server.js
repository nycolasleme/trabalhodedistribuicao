const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.use(cors()); // Permite que o frontend acesse o backend
app.use(express.json()); // Permite receber dados em formato JSON

const ARQUIVO_BANCO = './dados.json';

// Rota 1: Buscar dados (READ)
app.get('/produtos', (req, res) => {
    const dados = JSON.parse(fs.readFileSync(ARQUIVO_BANCO));
    res.json(dados);
});

// Rota 2: Inserir dados (CREATE)
app.post('/produtos', (req, res) => {
    const dados = JSON.parse(fs.readFileSync(ARQUIVO_BANCO));
    const novoProduto = {
        id: Date.now(),
        nome: req.body.nome,
        quantidade: req.body.quantidade
    };
    dados.push(novoProduto);
    fs.writeFileSync(ARQUIVO_BANCO, JSON.stringify(dados, null, 2));
    res.status(201).json(novoProduto);
});

// O servidor vai rodar na porta 5000
app.listen(5000, () => {
    console.log("Servidor Backend rodando com sucesso na porta 5000!");
});