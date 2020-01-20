function teste1(num){
    if(num > 7)
        console.log(num);
        
    console.log('Final'); // Sempre será executado
}

teste1(6);
teste1(8);


// Não utilizar ; nas estruturas de controle
function teste2(num){
    if(num > 7 );{
        console.log(num);
    }
}

teste2(6);
teste2(8);