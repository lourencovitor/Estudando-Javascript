function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2; //Operação do tipo OU
    const comptrarTv50 = trabalho1 && trabalho2; // Operação do tipoe E
    // const comprarTv32 = !!(trabalho1 ^ trabalho2); // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2; // OU exclusivo
    const manterSaudavel =! comprarSorvete; // Negação logica, operador unário

    return { comprarSorvete, comptrarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true)); 
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));