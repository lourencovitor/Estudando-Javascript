let valor // não inicializada, valor inicial dessa variavel é undefined, quando você inicializa uma variavel e não da nenhum valor pra ela por default ele é undefined
console.log(valor);


valor = null; // Ausência de valor
console.log(valor);
// console.log(valor.toString()); // ERRO !

const produto = {};
console.log(produto.preco); // undefined por que o preco dentro do produto não está definido
console.log(produto);

produto.preco = 3.50;

console.log(produto);

produto.preco = undefined; // evite atribuir undefined

console.log(!!produto.preco);
// delete produto.preco; // tirar um atributo de objeto
console.log(produto);

produto.preco = null; // sem preço
console.log(!!produto.preco);
console.log(produto);