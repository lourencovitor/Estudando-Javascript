// novo recurso do ES2015

const pessoa = {
    nome:'Vitor',
    idade:18,
    endereco: {
        logradouro: 'Rua Assum Preto',
        numero: 242
    }
} // Objeto criado para demonstrar a desestruturação

const { nome, idade } = pessoa; // desestruturando nome e idade essa linha e o equivalente a  const nome = pessoa.nome    e cont idade = pessoa.idade

console.log(nome, idade); // será exibido Vitor 18

const { nome: n, idade: i} = pessoa; // Atribuindo a n o valor de nome e a i o valor de idade usando o destructuring
console.log(n, i); // será exibido Vitor 18


const {sobrenome, bemhumorada = true} = pessoa; // atribuindo novos valores ao objeto pessoa

console.log(sobrenome, bemhumorada); // será exibido undefined pois sobrenome não está com valor definido e true pois é o valor passado para bemhumorada

const { endereco : {
    logradouro,
    numero,
    cep
}} = pessoa;
console.log(logradouro, numero, cep); // desestruturando o objeto dentro do objeto será exibido Rua Assum Preto 242 undefined, o cep está como undefined pois não foi estabelecido nenhum valor a ele