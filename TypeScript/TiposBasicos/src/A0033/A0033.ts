type TipoNome = {
  nome: string;
};

type TipoSobrenome = {
  nome: string;
  sobrenome: string;
};

type TipoNomeCompleto = {
  nome: string;
  sobrenome: string;
};

export class Pessoa implements TipoNome, TipoSobrenome, TipoNomeCompleto {
  constructor(public nome: string, public sobrenome: string) {}

  public nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Guilherme', 'Rocha');
console.log(pessoa.nomeCompleto());
