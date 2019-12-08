let num1 = 1;
let num2 = 2;

num1++; // Forma pós fixada
console.log(num1);

--num1; // Forma pre fixada
console.log(num1);


console.log(++num1 === num2--); // Result igual a TRUE pois ele só decrementa o num2 após ser comparado com num1
console.log(num1 === num2);