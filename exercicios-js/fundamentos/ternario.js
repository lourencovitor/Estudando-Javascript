// OPERADOR TERNARIOS

const resultado  = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'; // Operador ternario é dividido por 3 partes, a primeira parte é uma expressão(nota >= 7) que sempre retornará true ou false, a segunda parte que é se a função der true ai ele executa o que vem depois do ?, a terceira parte e se caso der false ai ele cai no que vem depois dos :


console.log(resultado(7.1))
console.log(resultado(6.7))