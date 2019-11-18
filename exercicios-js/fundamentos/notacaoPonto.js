// Acesasndo os objetos e membro de objetos com a notação ponto 

console.log(Math.ceil(6.1));

const obj1 = {};
obj1.name = 'Bola';
// obj1['name'] = 'Bola2';
console.log(obj1.name);


function Obj(nome){
    this.nome = nome; // notação ponto nesse caso server para instanciar o nome como this.nome para que possa ser usado esse metodo dentro dessa função
    this.exec = function(){
        console.log('Exec ...')
    }
};

const obj2 = new Obj('Cadeira');// instaciando a função com o parametro cadeira;
const obj3 = new Obj('Mesa'); //instaciando a função com o parametro Mesa;
console.log(obj2.nome); // Exibindo o nome como cadeira pois foi instanciado na constante obj2
console.log(obj3.nome); // // Exibindo o nome como mesa pois foi instanciado na constante obj3
obj3.exec(); // acessando a função exec que está dentro da função Obj