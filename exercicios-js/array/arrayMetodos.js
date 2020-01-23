const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"];
pilotos.pop(); // massa quebroy o carro! massa vai sair da lista de piloto
console.log(pilotos); // pop tira o ultimo elemento do array

pilotos.push("Verstappen"); // Adiciona um elemento depois da ultima posição do array
console.log(pilotos);

pilotos.shift(); // remove o primeiro elemento da lista
console.log(pilotos);

pilotos.unshift("Hamilton"); // Adiciona um elemento a primeira posição do array
console.log(pilotos);

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, "Bottas", "Massa");
console.log(pilotos);

// remover
pilotos.splice(3, 1); // massa quebrou o carro novamente
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); // Novo array gerado com o metodo splice
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);
