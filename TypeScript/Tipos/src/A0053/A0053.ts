@inverteNomeECor
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('Sou a classe');
  }
}

function inverteNomeECor<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    cor: string;
    nome: string;

    constructor(...args: any[]) {
      super(...args);
      this.nome = this.inverte(args[0]);
      this.cor = this.inverte(args[1]);
      console.log('Sou o decorador');
    }

    inverte(valor: string): string {
      return valor.split('').reverse().join('');
    }
  };
}

const animal = new Animal('guilherme', 'teal');
console.log(animal);
