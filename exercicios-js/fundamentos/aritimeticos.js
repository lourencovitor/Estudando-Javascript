const [a, b, c, d] = [3, 5, 1, 15];

/* Operações binarias pois sempre tem 2 operandos exemplo :
    op1 + op2 (aqui temos 2 operadores cada um com um valor operando)
*/
const soma = a + b + c + d;

const subtracao = d - b;

const multiplicacao = a * b;

const divisao = d / a;

const modulo = a % 2; // Modulo de 2 é muito usado para saber se um numero é impar ou se ele é par se o resultado for igual a 0 quer dizer que é par se o resultado for igual a 1 quer dizer que é impar

console.log(soma, subtracao, multiplicacao, -divisao, modulo); // Na constante de divisao estamos usando um sinal de menos na frente para deixar o resultado negativo isso é chamado de operador unario
