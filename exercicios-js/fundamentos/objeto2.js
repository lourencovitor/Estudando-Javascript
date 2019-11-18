console.log(typeof Object); // função 
console.log(typeof new Object);// new função vai receber um objeto

const Cliente = function(){};
console.log(typeof Cliente); // função
console.log(typeof new Cliente); // instanciando uma função

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto); // uma classe que é uma função
console.log(typeof new Produto); // instanciando uma classe que ele vira um objeto