const imprimirResultado = function(nota){
    switch(Math.floor(nota)){ // o switch não retorna um boolean ele retorna um valor tanto int, string como qualqer outro
        case 10: // Caso o valor que eu recebi no switch for 10 entre nesse case
        case 9:
            console.log("Quado de Honra");
            break; // palavra reservada para sair do switch case e parar de executar todos os cases
        case 8: case 7:
            console.log("Aprovado");
            break;
        case 6: case 5: case 4:
            console.log("Recuperação");
            break;
        case 3: case 2: case 1: case 0:
            console.log("Reprovado");
            break;
        default:
            console.log("Nota inválida");
    }
}

imprimirResultado(10);
imprimirResultado(8.9);
imprimirResultado(6.55);
imprimirResultado(2.3);
imprimirResultado(-1);
imprimirResultado(11);