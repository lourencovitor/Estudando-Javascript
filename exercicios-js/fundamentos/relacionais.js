console.log('01)', '1' == 1); // Operador relacional com dois iguais tem um pouco menos de precisão e não compara o tipo só o valor 

console.log('02)', '1' === 1); // Operador relacional com 3 iguais já tem mais precisão pois os tipos de dados tem que ser exatamente iguais para o resultado ser verdadeiro

console.log('03)', '3' != 3); // result é false

console.log('04)', '3' !== 3); // result é true


console.log('05)', 3 < 2);
console.log('06)', 3 > 2);
console.log('07)', 3 <= 2);
console.log('08)', 3 >= 2);

const d1 = new Date(0);
const d2 = new Date(0);

console.log('09)', d1 === d2);
console.log('10)', d1 == d2);
console.log('11)', d1.getDate() === d2.getDate());
console.log('12)', undefined == null);
console.log('13)', undefined === null);