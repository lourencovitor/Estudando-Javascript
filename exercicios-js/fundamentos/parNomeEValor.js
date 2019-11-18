// Par nome/valor
const saudacao = 'Opa'; // contexto léxico 1

function exec(){
    const saudacao = 'Falaa'; // contexto léxico 2 , podemos declara o mesmo nome de constante em blocos diferentes de codigo pois o browser irá interpretar como constantes diferentes
    return saudacao;
}


// Objetos são grupos alinhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endere:{
        logradouro: 'Rua Muito Longe',
        numero: 74
    }
}

console.log(saudacao); // retornará Opa
console.log(exec()); // retornará Falaa
console.log(cliente); // Retornará o objeto setado na constante cliente