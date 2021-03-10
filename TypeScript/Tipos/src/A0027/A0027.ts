export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  metodoNormal(): void {
    console.log(Pessoa.cpfPadrao, Pessoa.idadePadrao);
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, 0, '000.000.000-00');
  }

  static falaOi(): void {
    console.log('OI');
  }
}

const pessoa = new Pessoa('Guilherme', 'Rocha', 18, 'pdofkidfjpod');
const pessoa2 = Pessoa.criaPessoa('maria', 'Miranda');
console.log(pessoa);
console.log(pessoa2);
