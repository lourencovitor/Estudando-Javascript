// Função sem retorno

function imprimirSoma(a, b){
    console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2); // Valor b é um undefined e o retorno será um NaN
imprimirSoma(2,10,4,5,6,7,8) // Irá pegar os dois primeiros parametros e irá ignoras os outros parametros
imprimirSoma();// return é um NaN


// Função com retorno

function soma(a , b = 1){ //caso o valor b não for passado ele será por default 0
    return a + b;
};

console.log(soma(2, 3)); // Precisa colocar a fução dentro do console pois a função retorna algo

console.log(soma(2)); // return vai ser 2 pois ele está somando o 2 com o valor default de b

console.log(soma()); // se não passar o primeiro parametro ele será undefined e retornara um NaN