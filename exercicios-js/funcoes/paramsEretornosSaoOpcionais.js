function area(largura, altura){
    const area = largura * altura;
    if(area > 20){
        console.log(`Valor acima do permitido: ${area}m2`);
    }
    else{
        return area;
    }
}

console.log(area(2,2)); // return 4
console.log(area(2)); // return NaN
console.log(area()); // return NaN
console.log(area(2,3,22,44)); // returna 6 por que só pega os 2 primeiros parametros e descarta os outros
console.log(area(5,5)); // retornou 'Valor acima do permitido 25m2' e retornou undefined pois não passamos um return ao if 