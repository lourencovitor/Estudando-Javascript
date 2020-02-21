const porta = 3003;

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bancoDeDados = require("./bancoDedados");

// app.get("/produtos", (req, res, next) => {
//   console.log("Middleware 1...");
//   next();
// });

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/produtos", (req, res, next) => {
  res.send(bancoDeDados.gerProdutos()); // Converter para JSON
});

app.get("/produtos/:id", (req, res, next) => {
  res.send(bancoDeDados.gerProduto(req.params.id));
});

app.post("/produtos", (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco
  });
  res.send(produto);
});

app.listen(porta, () => {
  console.log(`Servidor rodando em ${porta}`);
});

//incompleto
