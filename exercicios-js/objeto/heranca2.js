// Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = "0"; // Não faça isso em casa !

const avo = { att1: "A" };

const pai = { __proto__: avo, att2: "B" };

const filho = { __proto__: pai, att3: "C" };

console.log(filho.attr0, filho.att1, filho.att2, filho.att3);

const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMax;
    }
  },
  status() {
    return `${this.velAtual}Km/h de ${this.velMax}Km/h`;
  }
};

const ferrari = {
  modelo: "F40",
  velMax: 324 // Shadowing
};

const volvo = {
  modelo: "V40",
  status() {
    return `${this.modelo}: ${super.status()}`;
  }
};

Object.setPrototypeOf(ferrari, carro); // Ferrari tem carro como prototipo
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);

volvo.acelerarMais(100);
console.log(volvo.status());

ferrari.acelerarMais(300);
console.log(ferrari.status());
