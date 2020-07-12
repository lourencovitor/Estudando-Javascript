const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const saudacao = require("./saudacaoMid");
const usuarioApi = require("./api/usuario");
require("./api/produto")(app, "Com param!");

app.post("/usuario", usuarioApi.salvar);
app.get("/usuario", usuarioApi.obter);

// função mid
app.use(bodyParser.text());
// função mid
app.use(bodyParser.json());
// função mid
app.use(bodyParser.urlencoded({ extended: true }));
// função mid com params
app.use(saudacao("Vitor"));

app.use((req, res, next) => {
  console.log("Antes...");
  next();
});

// query
app.get("/clientes/relatorio", (req, res) => {
  res.send(
    `Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`
  );
});

// body
app.post("/corpo", (req, res) => {
  //   let corpo = "";
  //   req.on("data", function (parte) {
  //     corpo += parte;
  //   });
  //   req.on("end", function () {
  //     res.send(corpo);
  //   });
  res.send(JSON.stringify(req.body));
});

// params
app.get("/clientes/:id", (req, res) => {
  res.send(`Cliente ${req.params.id} selecionado!`);
});

app.get("/opa", (req, res, next) => {
  console.log("Durante...");
  //   res.send("<h1>Estou bem</h1>");
  //   res.json({
  //     name: "Ipad 32gb",
  //     price: 1899.0,
  //     discount: 0.12,
  //   });
  res.json({
    data: [
      { id: 7, name: "vitor", position: 1 },
      { id: 25, name: "Raquel", position: 2 },
      { id: 95, name: "Oliver", position: 3 },
    ],
    count: 30,
    skip: 0,
    limit: 3,
    status: 200,
  });
  next();
});

app.use((req, res) => {
  console.log("Depois...");
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
