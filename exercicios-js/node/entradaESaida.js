const anonimo = process.argv.indexOf("-a") !== -1;
// console.log(anonimo);

if (anonimo) {
  process.stdout.write("Fala Anônimo\n");
} else {
  process.stdout.write("Informe o seu nome: ");
  process.stdin.on("data", data => {
    const nome = data.toString().replace("\n", ""); // captura informações que o usuario digitou

    process.stdout.write(`Fala ${nome}!!\n`); // mostra para o usuario as informações
    process.exit();
  });
}
