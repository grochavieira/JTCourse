class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.nome} está falando`);
  }

  //   comer() {
  //     console.log(`${this.nome} está comendo`);
  //   }

  //   beber() {
  //     console.log(`${this.nome} está bebendo`);
  //   }
}

function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function () {
  console.log(`${this.nome} está falando`);
};

const p1 = new Pessoa("Guilherme", "Rocha");
const p2 = new Pessoa("Maria", "Rocha");
const p3 = new Pessoa("João", "Rocha");
const p4 = new Pessoa("Lucas", "Rocha");
const p12 = new Pessoa2("Guilherme", "Rocha");
p1.falar();
p1.comer();
p1.beber();
p3.falar();
