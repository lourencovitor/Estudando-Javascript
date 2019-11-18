let numero = 1;

{
    let numero = 2;
    console.log('dentro =', numero); // exibirá o valor 2 pois ele irá procurar o valor da variavel numero no escopo mais fechado se caso não encontrar ele irá abrir um pouco mais o escopo e procurar um pouco mais abrangente
}
console.log('fora =', numero); // exibirá 1 pois ele é de escopo aberto então ele vai procurar dentro de todo escopo se tem essa variavel numero