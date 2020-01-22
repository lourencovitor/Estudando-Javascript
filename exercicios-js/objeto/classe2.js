class Avo {
  constructor(sobrenome) {
    this.sobrenome = sobrenome;
  }
}

class Pai extends Avo {
  constructor(sobrenome, profissao = "professor") {
    super(sobrenome); // super classe nesse caso seria Avo
    this.profissao = profissao;
  }
}

class Filho extends Pai {
  constructor() {
    super("Silva"); // super classe nesse caso seria Pai
  }
}

const filho = new Filho();
console.log(filho);
