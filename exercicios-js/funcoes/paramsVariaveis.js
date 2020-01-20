// arguments pega todos os meus argumentos passados na função

function soma(){
    let soma = 0;
    for(i in arguments) {
        soma += arguments[i];
    }
    return soma;
}

console.log(soma()); // return 0
console.log(soma(1)) // return 1
console.log(soma(1.1,2.2,3.3)) // return 6.6
console.log(soma(1.1,2.2, "Teste")) // return 3.3000000000000003Teste
console.log(soma('a','b','c')); // return  0abc