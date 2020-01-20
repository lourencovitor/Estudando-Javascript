let contador = 1; // COntador que vai controlar o laço
while (contador <= 10) {// Temos a expressão para dizer se vai continuar ou não
    console.log(`contador = ${contador}`);
    contador++; // temos também o incremento 
}

for(let i =1; i <= 10; i++){
    console.log(`i = ${i}`);
}

const notas = [6.7,7.4,9.8,8.1,7.1];
for(let i=0; i < notas.length; i++){
    console.log(`nota = ${notas[i]}`);
}