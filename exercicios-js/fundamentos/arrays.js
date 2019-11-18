// ARRAY

const valores = [7.7, 8.9, 9.2, 4.8]; // Array é um tipo de dado dinamico é uma estrutura indexada que é eterogenia
console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4] = 10; // Usamos os [] para pegar o indice do array que queremos
console.log(valores);
console.log(valores.length);


valores.push({id:3}, false, null, 'teste'); // method push que atribui novos valores os novos indices do array
console.log(valores);

console.log(valores.pop());


delete valores[0]; // deleta o indice que passei apos a funçao, tira um atributo de dentro do objeto
console.log(valores);


console.log(typeof valores); // Um array em javascript é um objeto