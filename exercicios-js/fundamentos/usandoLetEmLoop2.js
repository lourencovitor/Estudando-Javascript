const funcs = [];

for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i);
    })
}

funcs[2](); // por ser de escopo fechado quando usado o let ele grava o valor da variavel local por isso será exibido na posição 2 do array da funcs o valor 2

funcs[8](); // por ser de escopo fechado quando usado o let ele grava o valor da variavel local por isso será exibido na posição 8 do array da funcs o valor 8