const nome = 'Rebeca';

const concatenacao = 'Olá ' + nome + '!';

// O que não posso fazer com uma string 

// const exemplo1 = 'exem
// plo1'; NÂO POSSO QUEBRAR A LINHA COM STRING


// EXEMPLO DE TEMPLATESTRING

const template = `
    Olá
    ${nome}!`
// o template string suporta a quebra de linha 
console.log(concatenacao, template);


// expressoes ...
console.log(`1 + 1 = ${1 + 1}`); // Aqui ele interpola(Interpreta o valor dos ${1 + 1} e já faz o calculo direto sabendo que aqueles numeros não são strings e sim inteiros)

const up = texto => texto.toUpperCase();
console.log(`Ei ... ${up('cuidado')} !`);




