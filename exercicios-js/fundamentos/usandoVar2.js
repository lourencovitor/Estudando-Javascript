var numero = 1;

{
    var numero = 2;
    console.log('dentro =', numero); // exibirá o valor 2
}

console.log('fora =', numero); // exibirá o valor 2 também pois o var dentro do bloco sobrescreveu o valor da variavel global numero que seria a variavel de fora do bloco