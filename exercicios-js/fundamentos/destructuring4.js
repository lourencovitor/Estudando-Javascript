function rand([min = 0, max = 1000]){
    if(min > max) [min, max] = [max, min];
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand([50, 40])); // Nesse caso será gerado um numero randomico de 40 a 50 mesmo passando o parametro ao contrario a função arrumou do qual era o maximo e qual era o minimo
console.log(rand([992])); // Nesse caso ele ira passar como minimo o 922 e por padrao o max será o 1000
console.log(rand([, 10])); // Nesse caso ele ira passar 0 como min e 10 como max
console.log(rand([])); // Nesse caso ele ira passar 0 como min e 1000 como max
// console.log(rand()); // Aqui ira gerar um erro pois não existe nenhum array para fazer a desestruturação