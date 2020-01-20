const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(x in nums){
    if(x == 5){
        break // break desviara o fluxo do seu codigo para fora do bloco de codigos for
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums){
    if(y == 5){
        continue // usando o continue ele para a sequencia do codigo e volta para a continuação do codigo do laço atual que se encontra, interropente a condição corrente e pula pra proxima condição
    }
    console.log(`${y} = ${nums[y]}`)
}

// usando for com rotulos
externo: for(a in nums){
    for(b in nums){
        if(a == 2 && b == 3)break externo;
            console.log(`Par = ${a},${b}`);
    }
}