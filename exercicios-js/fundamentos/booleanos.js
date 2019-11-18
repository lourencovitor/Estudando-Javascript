let isAtivo = false;

console.log(isAtivo);


isAtivo = true;
console.log(isAtivo);

isAtivo = 1;

console.log(!isAtivo); // Usando o ! como negação então devera dar false

console.log(!!isAtivo); // dois not(!!) inverte a logica da negação e tranforma ele em o valor verdadeiro

console.log(!!true) // Esse console irá mostrar TRUE como resposta pois duas negações é igual a o valor verdadeiro 

console.log(!true) // Esse console irá mostrar FALSE pois é a negação de true 

console.log('os verdadeiros...')
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'texto');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));


console.log('Os falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));


console.log('Pra finalizar...');
console.log(!!('' || null || 0 || ' ')); // Ira retornar True pois as aspas simples abertas são verdadeiro


let nome = '';

console.log(nome || 'Desconhecido'); // Se nome for vazio então substitua por Desconhecido