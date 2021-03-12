interface Constructor {
  new (...args: any[]): any;
}

function inverteNomeECor(param1: string, param2: string) {
  return function (target: Constructor) {
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
        return valor.split('').reverse().join('') + param1 + ' ' + param2;
      }
    };
  };
}

function outroDecorador(param1: string) {
  return function (target: Constructor) {
    console.log('Sou o outro decorador' + param1);
    return target;
  };
}

@outroDecorador("Outro parâmetro");
@inverteNomeECor('valor1', 'valor2')
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('Sou a classe');
  }
}

const animal = new Animal('guilherme', 'teal');
console.log(animal);
