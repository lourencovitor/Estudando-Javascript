// operador ... rest{juntar}/spread(espalhar)
// usar rest com parâmetro de função

// usar spread com objeto

const funcionario = { nome: "Maria", salario: 1234.99 };
const clone = { ativo: true, ...funcionario };
console.log(clone);

// usar spread com array
const groupA = ["João", "Pedro", "Gloria"];
const grupoFinal = ["Maria", ...groupA, "Rafaela"];
console.log(grupoFinal);
