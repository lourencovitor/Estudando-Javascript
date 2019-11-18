const funcs = [];

for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i);
    })
}

funcs[2](); // valor exibido será 10 pois o var não respeito a variavel e não pego o valor realmente pois ela é de escopo global
funcs[8](); // valor exibido será 10 pois o var não respeito a variavel e não pego o valor realmente pois ela é de escopo global