console.log(typeof Array, typeof new Array(), typeof []);

let aprovados = new Array("Bia", "Carlos", "Ana");
console.log(aprovados);

aprovados = ["Bia", "Carlos", "Ana"];
console.log(aprovados[0]); // Primeiro elemento do array
console.log(aprovados[1]); //
console.log(aprovados[2]);
console.log(aprovados[3]); // Se eu não definir ele me retorna undefined

aprovados[3] = "Paulo"; //
aprovados.push("Abia");
console.log(aprovados.length);

aprovados[9] = "Rafael";
console.log(aprovados.length);
console.log(aprovados[8] === undefined);

console.log(aprovados);
aprovados.sort(); // Ordenação em ordem alfabetica, altera o array
console.log(aprovados);

delete aprovados[1]; // excluindo posição
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados = ["Bia", "Carlos", "Ana"];
aprovados.splice(1, 1); //excluindo Carlos
console.log(aprovados);
