function tratarErroELancar(erro){
    // throw new Error('...');
    // throw 10;
    // throw true;
    throw 'Mensagem';
    // throw{
    //     nome: erro.name,
    //     msg: erro.mensage,
    //     date: new Date
    // }
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!');
    }catch(e){
        tratarErroELancar(e);
    } finally{
        console.log('Final');
    }
}

// TRY = caso de tudo certo vai ser executado o try

// CATCH = caso de algum erro irá cair no catch onde você pode tratar o erro 

// FINALLY = Sempre será executado após o try ou catch


const obj = { name: 'Roberto'};
imprimirNomeGritado(obj)