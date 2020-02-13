const porta = 3003;

const express = require("express");
const app = express();
const bancoDeDados = require("./bancoDedados");

// app.get("/produtos", (req, res, next) => {
//   console.log("Middleware 1...");
//   next();
// });

app.get("/produtos", (req, res, next) => {
  res.send(bancoDeDados.gerProdutos()); // Converter para JSON
});

app.get("/produtos/:id", (req, res, next) => {
  res.send(bancoDeDados.gerProduto(req.params.id));
});

app.post("/produtos", (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.name,
    preco: req.body.preco
  });
  res.send(produto);
});

app.listen(porta, () => {
  console.log(`Servidor rodando em ${porta}`);
});
