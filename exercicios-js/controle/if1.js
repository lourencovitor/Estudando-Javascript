function soBoaNoticia(nota){
    // Se a nota for >= 7 então faça
    // dentro dos parentes sempre eu tenho uma expressão que retorna verdadeiro ou falso
    if(nota >= 7){
        console.log('Aprovado com ' + nota);
    }
}

soBoaNoticia(8.1); // mostrou aprovado com 8.1
soBoaNoticia(6.1); // não mostrou nada pois não compriu a condição do if

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('E verdade...' + valor);
    }
}

seForVerdadeEuFalo(); // false não cai dentro do if
seForVerdadeEuFalo(null); // false não cai dentro do if
seForVerdadeEuFalo(undefined); //  false não cai dentro do if
seForVerdadeEuFalo(NaN); //  false não cai dentro do if
seForVerdadeEuFalo(''); // false não cai dentro do if
seForVerdadeEuFalo(0); //  false não cai dentro do if
seForVerdadeEuFalo(-1); // Verdadeiro ira cair dentro do if 
seForVerdadeEuFalo(' '); // Verdadeiro ira cair dentro do if 
seForVerdadeEuFalo('?'); // Verdadeiro ira cair dentro do if 
seForVerdadeEuFalo([]); // Verdadeiro ira cair dentro do if 
seForVerdadeEuFalo([1,2]); // Verdadeiro ira cair dentro do if 
seForVerdadeEuFalo({}); // Verdadeiro ira cair dentro do if 