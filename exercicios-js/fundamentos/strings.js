// STRING

const escola = "Cod3r";

console.log(escola.charAt(4)); // charAt(4) vai me dar a letra que está no indice 4 da string

console.log(escola.charAt(5)); // caso não encontre um char na posição passada ele ira retornar vazio(null)

console.log(escola.charCodeAt(3)); // pega o valor do char passado por parametro e mostra o valor dele na tabela unicode ou tabela ASCII

console.log(escola.indexOf('3')); // indice associado ao digito 3 passado por parametro associado a variavel escola

console.log(escola.substring(1)); // substring(1) faz com que ele só exiba do indice passado por parametro para frente nesse caso exibirá od3r (incluindo o indice 1 passada no parametro)

console.log(escola.substring(0, 3)); // vai exibir o indice 0 até o indice 2 pois o indice 3 não será exibido, vai do primeiro parametro passado que onde começa até o segundo parametro que é onde termina sem exibir o parametro passado que seria o indice final (me de os 3 primeiros caracteres)

console.log('Escola '.concat(escola).concat("!")); // Concatenando string com constante e concatenando ao mesmo tempo a constante com outra string 

console.log('Escola ' + escola + "!"); // Outra maneira de concatenar

console.log(escola.replace(/\d/, 'e')); // usada uma expressão regular para substituir todos os digitos do texto pela letra 'e'

console.log(escola.replace(/\w/g, 'e')); // substitui todos os caracteres pelo 'e' passado quando usado o g(GLOBAL)

console.log(escola.replace(3, 'e')); // Trocou o valor encontrado no indice 3 pelo 'e'

console.log('Ana, Maria, Pedro'.split(',')); // Converter uma string em um array

console.log('Ana, Maria, Pedro'.split(/,/)); 
// Converter uma string em um array usando regex

