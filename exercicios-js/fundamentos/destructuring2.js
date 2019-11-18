// Destructuring 

const [a] =[10]; // usado o operador [] do lado esquerdo estamos fazendo uma desestruturação com array 
console.log(a);

const [n1, , n3,  ,n5, n6 = 0] = [10, 7, 9, 8]; // neste caso estamos desestruturando os valores passado  
console.log(n1, n3, n5, n6); // teremos o seguinte resultado 10 9 undefined 0 pois o 7 e o 8 foi definido ao ' ', e o undefined é da variavel n5 pois está sem valor nenhum 

const [, [, nota]] = [[8,8], [9,6,8]];
console.log(nota); // Já nessa desestruturação teremos o valor de 6 pis ele esta entrando na segunda posição do segundo array pegando a segunda posição