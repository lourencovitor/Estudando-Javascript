console.log(module.exports);
console.log(module.exports === this);
console.log(module.exports === exports);

this.a = 1;
exports.exports = 3;

exports = null;

console.log(module.exports);

exports = {
  nome: "Teste"
};

console.log(module.exports);

module.exports = { public: true };