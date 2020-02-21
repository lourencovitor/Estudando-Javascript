// Arrow Function
const soma = (a, b) => a + b;
console.log(soma(2, 5));

// Arrow function (this)
const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({});
lexico1();
lexico2();

// parametros default
function log(text = "Node") {
  console.log(text);
}
log();
log("Sou mais forte");

// operador rest
function total(...numeros) {
  let total = 0;
  numeros.forEach(n => (total += n));
}
console.log(total(2, 3, 4, 5));
