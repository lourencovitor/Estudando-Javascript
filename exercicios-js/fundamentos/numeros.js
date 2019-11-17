// VARIAVEIS DO TIPO NUMBER

const peso1 = 1.0; //Ponto flutuante

const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); //True sim ele é inteiro
console.log(Number.isInteger(peso2));

const avaliacao1 =  9.871;
const avaliacao2 = 6.871;

const total =  avaliacao1 * peso1 + avaliacao2 * peso2;

const media = total / (peso1 + peso2);

console.log(media);
console.log(media.toFixed(2)); // toFixed controla as casas decimais que você quer que apareça

console.log(media.toString()); // toString troca o valor para string 

console.log(media.toString(2)); // toString(2) Transformando valor em binario

console.log(typeof media); // type number 
console.log(typeof Number); // type function