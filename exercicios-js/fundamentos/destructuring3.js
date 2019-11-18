function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);   
}

const obj = { max:50, min:40};
console.log(rand(obj)); // ira gerar um numero randomico de 40 a 50
console.log(rand({min: 955}));// Nesse caso ira gerar um numero randomico de 955 a 1000
console.log(rand({})); // Nesse caso vai gerar um numero randomico de 0 a 1000
// console.log(rand()); // Nessa caso irá dar erro pois nã há nenhum objeto passado para função exercer o destructuring 