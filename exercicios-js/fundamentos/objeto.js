// Notação literal de OBJETOS 

const prod1 = {}; // representação de objeto, objeto em javascript é o contexto de chave e valor, um objeto é uma coleção de chave e valores

prod1.nome = 'Celular Ultra Mega'; // Só posso ter dentro de um objeto um indentificados unico

prod1.preco = 4998.90;
prod1['Desconto Legal'] = 0.40; // Pode usar notações com espaço mais não é recomendavel

console.log(prod1);

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
};

'{ "nome": "vitor", "idade":18 }' // Um JSON valido, JSON é um formato textual

console.log(prod2);