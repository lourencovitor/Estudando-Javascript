// Pessoa -> 123 -> {...}
const pessoa = { nome: "João" };
pessoa.nome = "Pedro";
console.log(pessoa);

// pessoa -> 456 -> {...}
// pessoa = {
//   nome: "Ana"
// }; // gera erro por que não pode ser atribuido um novo ponto de apontamento

Object.freeze(pessoa); // congelando o objeto pessoa, não consegue mais mexer no objeto

pessoa.nome = "Maria";
pessoa.end = "Rua ABC";
delete pessoa.nome;

console.log(pessoa.nome);
console.log(pessoa);

const pessoaCostante = Object.freeze({
  nome: "João"
});

pessoaCostante.nome = "Maria";
console.log(pessoaCostante);
